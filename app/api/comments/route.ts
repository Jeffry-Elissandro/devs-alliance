import { promises as fs } from "fs";
import path from "path";

import { NextResponse } from "next/server";

const filePath = path.join(
  process.cwd(),
  "data",
  "comments.json"
);

async function readComments() {

  try {

    const file = await fs.readFile(
      filePath,
      "utf8"
    );

    return JSON.parse(file);

  } catch {

    return [];

  }

}

export async function GET() {

  const comments = await readComments();

  return NextResponse.json(comments);

}

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();

    const comments = await readComments();

    const newComment = {

      id: Date.now().toString(),

      nickname: body.nickname,

      message: body.message,

      createdAt: new Date().toISOString(),

      member:
        body.code?.trim().toLowerCase() === "monika",

      featured: false,

      likes: 0,

      visible: true,

    };

    comments.unshift(newComment);

    await fs.writeFile(

      filePath,

      JSON.stringify(
        comments,
        null,
        2
      ),

      "utf8"

    );

    return NextResponse.json(

      {

        success: true,

        comment: newComment,

      },

      {

        status: 201,

      }

    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(

      {

        success: false,

        error:
          "No fue posible guardar el comentario.",

      },

      {

        status: 500,

      }

    );

  }

}
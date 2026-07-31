import { NextResponse } from "next/server";

import {
  addComment,
  getComments,
} from "@/services/comments/commentsService";

export async function GET() {

  try {

    const comments = await getComments();

    return NextResponse.json(comments);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "No fue posible obtener los comentarios.",
      },
      {
        status: 500,
      }
    );

  }

}

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();

    if (
      !body.nickname?.trim() ||
      !body.message?.trim()
    ) {

      return NextResponse.json(
        {
          error:
            "Nickname y comentario son obligatorios.",
        },
        {
          status: 400,
        }
      );

    }

    const comment = await addComment({

      nickname: body.nickname.trim(),

      message: body.message.trim(),

      member:
        body.code?.trim() ===
        process.env.DEV_MEMBER_CODE,

    });

    return NextResponse.json(
      comment,
      {
        status: 201,
      }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "No fue posible guardar el comentario.",
      },
      {
        status: 500,
      }
    );

  }

}
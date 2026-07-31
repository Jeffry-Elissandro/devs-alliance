import { supabase } from "@/lib/supabase/client";

import { CommentRow } from "@/lib/supabase/types";

import { Comment } from "@/lib/comments/types";

function mapComment(row: CommentRow): Comment {

  return {

    id: row.id.toString(),

    nickname: row.nickname,

    message: row.message,

    member: row.member,

    featured: row.featured,

    likes: row.likes,

    visible: row.visible,

    createdAt: row.created_at,

  };

}

export async function getComments(): Promise<Comment[]> {

  const { data, error } = await supabase

    .from("comments")

    .select("*")

    .eq("visible", true)

    .order("created_at", {

      ascending: false,

    });

  if (error) {

    throw error;

  }

  return (data ?? []).map(mapComment);

}

interface CreateComment {

  nickname: string;

  message: string;

  member: boolean;

}

export async function addComment({

  nickname,

  message,

  member,

}: CreateComment): Promise<Comment> {

  const { data, error } = await supabase

    .from("comments")

    .insert({

      nickname,

      message,

      member,

      featured: false,

      likes: 0,

      visible: true,

    })

    .select()

    .single();

  if (error) {

    throw error;

  }

  return mapComment(data);

}
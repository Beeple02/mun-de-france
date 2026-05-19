import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.partnerSchool.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const token = request.headers.get("Authorization");
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const body = await request.json();
  const item = await prisma.partnerSchool.create({ data: { name: body.name, logoUrl: body.logoUrl } });
  return NextResponse.json(item, { status: 201 });
}

export async function OPTIONS(request: Request) {
  const auth = request.headers.get("Authorization");
  if (auth === process.env.ADMIN_PASSWORD) return new Response(null, { status: 200 });
  return new Response(null, { status: 401 });
}

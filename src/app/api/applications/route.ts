import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const token = request.headers.get("cookie")?.split("; ").find(row => row.startsWith("admin_token="))?.split("=")[1];
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const data = await prisma.application.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, institution, roleApplied, motivation } = body;
    const item = await prisma.application.create({
      data: { fullName, email, institution, roleApplied, motivation }
    });
    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

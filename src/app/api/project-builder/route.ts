import { NextRequest, NextResponse } from 'next/server';

interface ProjectBuilderData {
  category: string;
  subcategory: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  existingSystems: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ProjectBuilderData = await request.json();

    // Validate required fields
    if (
      !data.category ||
      !data.subcategory ||
      !data.projectDescription ||
      !data.budget ||
      !data.timeline ||
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.company ||
      !data.role
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Save to database
    // TODO: Send confirmation email to user
    // TODO: Send notification to admin

    console.log('Project builder submission:', data);

    return NextResponse.json(
      { message: 'Project request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing project builder:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

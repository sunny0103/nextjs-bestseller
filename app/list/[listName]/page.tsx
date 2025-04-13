import { Suspense } from "react";
import BookLists from "../../../components/book-lists";
import { Metadata } from "next";
import { getBooks } from "../../constant";

type PageProps = {
  params: Promise<{ listName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getBooks(resolvedParams.listName);
  return {
    title: data.results.list_name,
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = await getBooks(resolvedParams.listName);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BookLists data={data} />
      </Suspense>
    </div>
  );
}

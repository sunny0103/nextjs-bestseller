
import BookLists, { getBooks } from "../../../components/book-lists";
import { Metadata } from "next";

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
      <BookLists data={data} />
    </div>
  );
}

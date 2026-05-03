import { notFound } from "next/navigation";
import {
  getPackageById,
  getPackageStaticParams,
} from "@/features/pacotes/data/packages";
import { PackageDetailPage } from "@/features/pacotes/components/package-detail-page";

export async function generateStaticParams() {
  return getPackageStaticParams();
}

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const pkg = getPackageById(resolvedParams.id);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailPage pkg={pkg} />;
}

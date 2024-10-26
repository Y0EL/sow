import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

import { GitHubLink } from "@/settings/navigation";
import { cn } from "@/lib/utils";

type SideBarEdit = {
  title: string;
  slug: string;
};

export default function RightSideBar({ slug, title }: SideBarEdit) {
  const feedbackUrl = `${GitHubLink.href}/issues/new?title=Feedback for "${title}"&labels=feedback`;
  const editUrl = `${GitHubLink.href}/edit/main/contents/docs/${slug}/index.mdx`;

  return (
    <div className="flex flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">Konten</h3>
      <div className="flex flex-col gap-2">
        <Link
          href="https://wa.me/62817104060?text=Feedback"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-sm text-neutral-800 dark:text-neutral-300/85 no-underline flex items-center"
          )}
        >
          <LuArrowUpRight className="mr-1 w-4 h-4 inline-block" /> Feedback
        </Link>
        <Link
          href="https://wa.me/62817104060?text=Kerjasama"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-sm text-neutral-800 dark:text-neutral-300/85 no-underline flex items-center"
          )}
        >
          <LuArrowUpRight className="mr-1 w-4 h-4 inline-block" /> Kerjasama
        </Link>
      </div>
    </div>
  );
}

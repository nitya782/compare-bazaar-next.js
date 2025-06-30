// app/Resources/Whitepaper/[slug]/page.jsx (or wherever your page is)
import { whitepapers } from '../../../../components/whitepaperData';
import WhitepaperDetailClientWrapper from '../../../../components/WhitepaperDetailClientWrapper';
import { notFound } from 'next/navigation';

const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

export async function generateStaticParams() {
  return whitepapers.map((paper) => ({
    slug: slugify(paper.title),
  }));
}

export default function WhitepaperPage({ params }) {
  const { slug } = params;
  const paper = whitepapers.find((p) => slugify(p.title) === slug);

  if (!paper) {
    notFound();
  }

  return <WhitepaperDetailClientWrapper paper={paper} />;
}


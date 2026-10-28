import Link from "next/link";
import type { TextBlock } from "@/lib/types";

export default function TextBlocks({ blocks }: { blocks: TextBlock[] }) {
  return blocks.map((block, i) => (
    <div key={i} className="text-block">
      {block.title && <h2 className="section-title">{block.title}</h2>}
      {block.kicker && <p className="kicker">{block.kicker}</p>}
      {block.paragraphs?.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
      {block.bullets && block.bullets.length > 0 && (
        <ul className="dash-list">
          {block.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {block.items && (
        <dl className="item-list">
          {block.items.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>
                {item.href && !item.href.startsWith("/") ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
                {item.href?.startsWith("/") && (
                  <Link href={item.href} className="read-more">
                    Meer lezen →
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {block.closing?.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  ));
}

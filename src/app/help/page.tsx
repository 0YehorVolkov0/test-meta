import type { Metadata } from "next";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et hic architecto ratione incidunt! Quos magni quibusdam sunt. Delectus architecto nesciunt molestias sint accusamus autem nihil omnis aliquam nobis dolore?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit rem culpa velit error nemo distinctio ut? Fugit, sequi nihil. Praesentium iusto in a provident facilis dolor pariatur similique delectus perspiciatis!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis earum iste, quam quas est atque. Architecto, incidunt dignissimos ullam omnis rem natus nulla eaque modi ab sequi accusamus. Voluptatibus, quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam ab veritatis aspernatur possimus nisi totam, voluptate, laboriosam expedita deleniti rem! Maxime enim cumque nulla tempore et at, repellat iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore harum sapiente architecto dolor quibusdam. Laboriosam pariatur, quia numquam incidunt molestiae explicabo velit? Alias voluptatem rem sed perspiciatis iusto officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ratione accusantium quo eligendi delectus, illum qui cumque animi eaque rem provident corrupti optio aperiam facere, quidem consectetur, nostrum numquam suscipit?
        1111111111111111222222233333

    <img src="/test2.png" alt="test" className="w-84 h-40"/>

      <Link target="_blank"
      rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://test-meta-liart.vercel.app/")}`} >
      Share Facebook
      </Link>
      <Link target="_blank"
      rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("https://test-meta-liart.vercel.app/")}`} >
      Share Twitter
      </Link>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "TEST2222",
    description: "lololololololololololololo",
    openGraph: {
      images: [{url: '/test2.png'}],
      url: "/"
    }
  }
}
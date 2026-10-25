import { notFound } from "next/navigation";
import GalleryClient from "./GalleryClient";

const POOL = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
  "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1400&q=80",
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1400&q=80",
  "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1400&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1400&q=80",
];

const makePhotos = (start: number, n: number) =>
  Array.from({ length: n }, (_, i) => POOL[(start + i) % POOL.length]);

const galleries = [
  {
    id: "praise-night-2024",
    title: "Praise Night",
    season: "Fall 2024",
    tag: "Worship",
    blurb:
      "The biggest night of our year — a whole campus lifting one song. These are the voices, the hands raised and the quiet moments in between.",
    photos: makePhotos(0, 12),
  },
  {
    id: "small-groups",
    title: "Small Groups",
    season: "Weekly",
    tag: "Community",
    blurb:
      "Shared meals, open Bibles and honest conversations — the small circles where friendships are made.",
    photos: makePhotos(1, 9),
  },
  {
    id: "campus-outreach",
    title: "Campus Outreach",
    season: "Semester",
    tag: "Service",
    blurb:
      "Hot drinks, prayer and real conversations — faith taken out of the chapel and into campus life.",
    photos: makePhotos(2, 11),
  },
  {
    id: "bible-study",
    title: "Bible Study",
    season: "Weekly",
    tag: "Study",
    blurb:
      "Verse by verse, question by question. A table, a text and people willing to wrestle with it together.",
    photos: makePhotos(3, 8),
  },
  {
    id: "christmas-carol-night",
    title: "Christmas Carol Night",
    season: "Winter 2024",
    tag: "Special",
    blurb:
      "Carols, cocoa and candlelight — our most loved evening, celebrating the birth of Christ together.",
    photos: makePhotos(4, 12),
  },
  {
    id: "retreat-2024",
    title: "Retreat",
    season: "Summer 2024",
    tag: "Getaway",
    blurb:
      "A few days away to rest, play and listen. Long walks, late talks and a lot of laughter.",
    photos: makePhotos(5, 12),
  },
];

export async function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = galleries.findIndex((g) => g.id === slug);

  if (idx < 0) notFound();

  const album = galleries[idx];
  const next = galleries[(idx + 1) % galleries.length];

  return <GalleryClient album={album} next={next} />;
}
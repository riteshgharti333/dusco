export type NewsItem = {
  id: string;
  date: string;
  tag: string;
  title: string;
  blurb: string;
  content: string[];
  image: string;
  featured?: boolean;
};

export const news: NewsItem[] = [
  {
    id: "new-executive-committee-2026-27",
    date: "Nov 20, 2024",
    tag: "Announcement",
    title: "New Executive Committee Announced for 2026–27",
    blurb:
      "We're delighted to introduce our newly elected leadership team — a group of students ready to serve, lead, and carry the vision forward.",
    content: [
      "We are delighted to announce the newly elected Executive Committee of the Dhaka University Christian Students' Organisation (DUCSO) for the 2026–2027 term.",
      "The new leadership comprises Payel Paul Mrong as President, Ronald Aurunavo Das as General Secretary, and Liton Tripura as Organising Secretary.",
      "Together with the rest of the committee, they will lead the organisation through another year of worship, community, and service on campus.",
      "Please join us in praying for the new leadership as they step into their roles. We are excited to see what God does through them in the year ahead.",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
    featured: true,
  },
  {
    id: "christmas-carol-night-save-the-date",
    date: "Nov 12, 2024",
    tag: "Event",
    title: "Christmas Carol Night — Save the Date",
    blurb:
      "Our biggest night of the year is coming. Mark your calendar for December 15th.",
    content: [
      "It's that time of year again. Christmas Carol Night returns on December 15th at the Main Auditorium.",
      "Expect carols, cocoa, candlelight, and the story of the first Christmas told in a way you've never heard before.",
      "Doors open at 6:30 PM. The evening starts at 7:00 PM sharp.",
      "Invite your friends, classmates, and hostel mates. Everyone is welcome — this is our biggest night of the year and we can't wait to celebrate with you.",
    ],
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1400&q=80",
  },
  {
    id: "small-groups-across-campus",
    date: "Nov 05, 2024",
    tag: "Update",
    title: "Small Groups Now Meeting Across Campus",
    blurb:
      "12 new small groups launched this semester — find one near your hostel or faculty.",
    content: [
      "This semester, we've launched 12 new small groups meeting in different hostels and faculties across campus.",
      "Small groups are where real community happens — a few students, one leader, one evening a week, sharing a meal and opening Scripture together.",
      "Whether you live in a hall, a hostel, or off-campus, there is a group near you.",
      "If you'd like to join a small group, reach out to us at hello@ducso.org or speak to any committee member after a Friday gathering.",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
  },
  {
    id: "campus-outreach-500-students",
    date: "Oct 28, 2024",
    tag: "Service",
    title: "Campus Outreach Reaches 500+ Students",
    blurb:
      "A milestone of God's faithfulness — our teams prayed with hundreds of students this month.",
    content: [
      "This month, our outreach teams reached a milestone — over 500 students prayed with, talked to, and served across our campus.",
      "From free hot drinks at the main gate to prayer walks through every faculty, we've seen God open doors we never expected.",
      "Thank you to every volunteer who gave their time, energy, and heart to this work.",
      "We believe this is just the beginning. God is moving on our campus, and we are honoured to be part of it.",
    ],
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1400&q=80",
  },
  {
    id: "praise-night-recap",
    date: "Oct 15, 2024",
    tag: "Event",
    title: "Praise Night Recap — A Night to Remember",
    blurb:
      "The whole campus worshipped as one voice. Relive the moments from our biggest gathering of the year.",
    content: [
      "Praise Night was everything we prayed for and more. Over 400 students filled the auditorium for a night of worship, testimonies, and prayer.",
      "The evening was marked by powerful live worship, moving student testimonies, and a message that challenged everyone present.",
      "If you missed it, we've put together a recap of the best moments — check our gallery for photos and our social media for the full video.",
      "Thank you to everyone who came, served, prayed, and worshipped with us. See you next year.",
    ],
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80",
  },
  {
    id: "welcome-new-members",
    date: "Sep 01, 2024",
    tag: "Welcome",
    title: "Welcome to the Family — New Members Join DUCSO",
    blurb:
      "Over 60 new students joined our community this semester. Welcome home.",
    content: [
      "This semester we welcomed over 60 new students into the DUCSO family.",
      "Some came looking for community. Some came looking for purpose. Some came looking for God. Whatever brought you here, we're so glad you came.",
      "If you're new, here's what to do next: come to a Friday gathering, join a small group, and introduce yourself to any committee member.",
      "You belong here. Welcome home.",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
  },
];
import { client } from '../../../sanity/client';
import MediaClient from './MediaClient';

export const revalidate = 60; // Revalidate every minute

export default async function MediaPage() {
  const query = `*[_type == "galleryImage"] | order(date desc) {
    _id,
    title,
    category,
    date,
    "imageUrl": image.asset->url
  }`;
  
  const sanityImages = await client.fetch(query);
  
  return <MediaClient sanityImages={sanityImages} />;
}

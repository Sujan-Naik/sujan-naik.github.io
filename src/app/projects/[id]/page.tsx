export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log(id);
  const { default: Post } = await import(`@/content/${id}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return [{ id: 'test'}]
}

export const dynamicParams = true
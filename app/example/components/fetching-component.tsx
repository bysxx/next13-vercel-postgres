import { getData } from '@api/example';

export default async function FetchingComponent() {
  const data = await getData();

  return <div className="">{data}</div>;
}

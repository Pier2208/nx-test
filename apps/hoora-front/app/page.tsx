import { Button } from '@lpdv/ui/shadcn';

export default async function Index() {
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col items-center justify-center ">
      <h1 className="text-white text-6xl">Hello world</h1>
      <Button className="mt-8">Click me</Button>
    </div>
  );
}

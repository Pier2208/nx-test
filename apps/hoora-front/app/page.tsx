import { Button as ShadcnButton } from '@lpdv/ui/shadcn';
import Button from '@mui/material/Button';
import { DatePickerShadcn } from './components/DatePickerShadcn';
import { DatePickerMui } from './components/DatePickerMui';

export default async function Index() {
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col items-center justify-center ">
      <h1 className="text-white text-6xl">Hello world</h1>
      <div className="flex gap-4 p-4">
        <ShadcnButton>Shadcn button</ShadcnButton>
        <Button variant="contained">MUI Button</Button>
      </div>
      <div className="flex gap-4 p-4">
        <DatePickerShadcn />
        <DatePickerMui />
      </div>
    </div>
  );
}

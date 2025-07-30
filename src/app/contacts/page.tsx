'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useContacts } from 'context/ContactsContext';
import Link from 'next/link';
export default function Home() {
  const { contacts } = useContacts()!;
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Table className="border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] border px-4 py-2">Name</TableHead>
              <TableHead className="border px-4 py-2">Email</TableHead>
              <TableHead className="border px-4 py-2">Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => {
              return (
                <TableRow key={contact.id} className="cursor-pointer">
                  <TableCell className="border px-4 py-2">
                    <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
                  </TableCell>
                  <TableCell className="border px-4 py-2">
                    <Link href={`/contacts/${contact.id}`}>{contact.email}</Link>
                  </TableCell>
                  <TableCell className="border px-4 py-2">
                    <Link href={`/contacts/${contact.id}`}>{contact.phone}</Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

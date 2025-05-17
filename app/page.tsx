import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="scroll-m-20 text-3xl font-light tracking-tight">
              Home Page
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/admin" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Admin Page
          </Link>
        </CardContent>
      </Card>
    </>


  );
}

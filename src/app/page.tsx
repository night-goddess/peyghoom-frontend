"use client";
import { paths } from '@/configs/paths';
import { useRouter } from 'next/navigation';

import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push(paths.login);
  }, [])


  return (
    <h1>Home Page</h1>
  );
}

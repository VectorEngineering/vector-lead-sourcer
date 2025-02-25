/* eslint-disable prettier/prettier */
import { footerSections, socialMediaLinks } from "@/utils/constants";

import { Button } from "./ui/button";
import Link from "next/link";
import PearDarkLogo from "./ui/PearDark.svg";

export default function Footer() {
  return (
    <footer className="mx-auto mt-48 w-full max-w-screen-xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        {/* Logo and tagline */}
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link className="-ml-1 inline-block dark:invert" href="/">
            <PearDarkLogo />
          </Link>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Building blocks for your business
          </p>
          {/* <p
            className="mb-4 text-xs font-bold text-gray-500 sm:text-xs"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Oppulence is built on the innovations of Midday
          </p> */}
        </div>

        {/* Sections with links */}
        {footerSections.map(({ title, links }, idx) => (
          <div key={`${idx}-${title}-${Math.random()}`}>
            <h5 className="font-semibold">{title}</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              {links.map(({ text, href }, idx) => (
                <li key={`${idx}-${text}-${Math.random()}`}>
                  <Link
                    href={href}
                    target={"_self"}
                    className="text-sm hover:text-primary-600"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Download Section */}
        {/* <div>
          <h5 className="font-semibold">Download</h5>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Download the{" "}
            <Link
              href="/desktop-download"
              className="text-foreground underline-offset-1 hover:underline"
            >
              desktop app directly
            </Link>
            .
          </p>
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Social media links */}
        <div className="-mr-2 flex items-center gap-1">
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <Button
              key={link}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Oppulence - All rights reserved.
        </span>
      </div>
    </footer>
  );
}

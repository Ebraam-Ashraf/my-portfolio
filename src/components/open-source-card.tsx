"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface OpenSourceCardProps {
  logoUrl: string;
  altText: string;
  projectTitle: string;
  institution?: string;
  href?: string;
  keywords?: readonly string[];
  period: string;
  description?: string;
}

export const OpenSourceCard = ({
  logoUrl,
  altText,
  projectTitle,
  institution,
  href,
  keywords,
  period,
  description,
}: OpenSourceCardProps) => {
  return (
    <Link href={href || "#"} className="block">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex flex-wrap items-center font-semibold leading-none text-xs sm:text-sm gap-y-1">
                {projectTitle}
                {keywords && (
                  <span className="inline-flex flex-wrap gap-1 ml-1">
                    {keywords.map((keyword, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-left sm:text-right shrink-0 mt-1 sm:mt-0">
                {period}
              </div>
            </div>
            {institution && (
              <div className="font-sans text-xs text-muted-foreground mt-1">
                {institution}
              </div>
            )}
          </CardHeader>
          {description && (
            <div className="mt-2 px-6 pb-4 text-xs sm:text-sm text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

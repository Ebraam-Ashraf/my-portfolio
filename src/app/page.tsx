import { AwardCard } from "@/components/award-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { OpenSourceCard } from "@/components/open-source-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">

      {/* ── HERO ── */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-normal sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <div className="flex gap-3 mt-8 flex-wrap">
                <Link href={DATA.resumeLink} passHref>
                  <button className="flex items-center whitespace-nowrap px-8 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    My Resume
                  </button>
                </Link>
                <Link href="#contact" passHref>
                  <button className="flex items-center whitespace-nowrap px-8 py-2 text-white bg-red-500 rounded hover:bg-orange-600">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-30 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      {DATA.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, index) => (
              <BlurFade
                key={work.company + work.title}
                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* ── EDUCATION ── */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, index) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + index * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── COURSES & CERTIFICATIONS ── */}
      {DATA.certifications.length > 0 && (
        <section id="certifications">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
              <h2 className="text-2xl font-bold">Courses &amp; Certifications</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.certifications.map((certification, index) => (
                  <BlurFade
                    key={certification.title + certification.dates}
                    delay={BLUR_FADE_DELAY * 9.5 + index * 0.05}
                  >
                    <ProjectCard
                      href={(certification.links as readonly any[])?.[0]?.href}
                      title={certification.title}
                      description={certification.description}
                      tags={certification.technologies as readonly string[]}
                      image={certification.image}
                      links={certification.links as readonly any[]}
                    />
                  </BlurFade>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>
      )}

      {/* ── OPEN SOURCE CONTRIBUTIONS ── */}
      {DATA.openSourceContributions.length > 0 && (
        <section id="open-source-contributions">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-2xl font-bold">Open Source Contributions</h2>
            </BlurFade>
            {DATA.openSourceContributions.map((contribution, index) => (
              <BlurFade
                key={contribution.projectTitle}
                delay={BLUR_FADE_DELAY * 11 + index * 0.05}
              >
                <OpenSourceCard
                  logoUrl={contribution.logoUrl}
                  altText={contribution.altText}
                  projectTitle={contribution.projectTitle}
                  institution={contribution.institution}
                  href={contribution.href}
                  keywords={contribution.keywords}
                  period={contribution.period}
                  description={contribution.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* ── AWARDS ── */}
      {DATA.awards.length > 0 && (
        <section id="awards">
          <div className="space-y-6 w-full py-4">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <h2 className="text-2xl font-bold">Awards &amp; Competitions</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.awards.map((award, index) => (
                  <BlurFade
                    key={award.title + award.dates}
                    delay={BLUR_FADE_DELAY * 14 + index * 0.05}
                  >
                    <AwardCard
                      title={award.title}
                      description={award.description}
                      location={award.location}
                      dates={award.dates}
                      image={award.image}
                      links={award.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )}

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, index) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 16 + index * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="space-y-6 w-full py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-2 text-center">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, index) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 18 + index * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <div className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <p>Want to chat?</p>
                <p>
                  DM on{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="https://wa.me/201094250112"
                    className="text-blue-500 hover:underline"
                  >
                    WhatsApp (01094250112)
                  </Link>{" "}
                  or{" "}
                  <Link
                    href={DATA.contact.social.Gmail.url}
                    className="text-blue-500 hover:underline"
                  >
                    email me
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}

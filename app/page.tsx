import {
    Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <span className="text-lg font-bold text-white">
                T
              </span>
            </div>

            <span className="font-heading text-xl font-semibold tracking-tight text-slate-900">
              Teckno-Space
            </span>
          </Link>


          {/* Navigation */}

          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Features
            </Link>

            <Link
              href="#solutions"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Solutions
            </Link>

            <Link
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              About
            </Link>

          </div>


          {/* Authentication */}

          <div className="flex items-center gap-3">

            <Show when="signed-out">

              <SignInButton mode="modal">
                <button
                  className="
                    hidden
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                    hover:text-slate-950
                    sm:block
                  "
                >
                  Sign in
                </button>
              </SignInButton>


              <SignUpButton mode="modal">
                <button
                  className="
                    rounded-full
                    bg-slate-900
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-slate-700
                  "
                >
                  Get Started
                </button>
              </SignUpButton>

            </Show>


            <Show when="signed-in">

              <Link
                href="/dashboard"
                className="
                  hidden
                  rounded-full
                  bg-slate-900
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-slate-700
                  sm:block
                "
              >
                Open Workspace
              </Link>

              <UserButton />

            </Show>

          </div>

        </div>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-slate-100
            opacity-60
            blur-3xl
          "
        />


        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                text-slate-600
                shadow-sm
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              Your unified digital workspace
            </div>


            {/* Heading */}

            <h1
              className="
                font-heading
                text-5xl
                font-semibold
                leading-tight
                tracking-tight
                text-slate-950
                sm:text-6xl
                lg:text-7xl
              "
            >
              Everything your team needs.

              <span className="block text-slate-400">
                One workspace.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Teckno-Space brings your applications, workflows,
              productivity tools and business systems together
              in one intelligent workspace.
            </p>


            {/* CTA */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Show when="signed-out">

                <SignUpButton mode="modal">

                  <button
                    className="
                      group
                      flex
                      h-12
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-900
                      px-7
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-slate-700
                    "
                  >
                    Start Building

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                </SignUpButton>

              </Show>


              <Show when="signed-in">

                <Link
                  href="/dashboard"
                  className="
                    group
                    flex
                    h-12
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-900
                    px-7
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-slate-700
                  "
                >
                  Open Workspace

                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </Show>


              <Link
                href="#features"
                className="
                  flex
                  h-12
                  items-center
                  rounded-full
                  border
                  border-slate-200
                  px-7
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-50
                "
              >
                Explore Features
              </Link>

            </div>

          </div>


          {/* =====================================================
              PRODUCT PREVIEW
          ===================================================== */}

          <div className="mx-auto mt-20 max-w-6xl">

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                shadow-2xl
              "
            >

              {/* Browser bar */}

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2
                  border-b
                  border-slate-200
                  bg-white
                  px-5
                "
              >
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-3 w-3 rounded-full bg-slate-300" />
              </div>


              {/* Dashboard preview */}

              <div className="grid min-h-[430px] grid-cols-[200px_1fr]">

                {/* Preview Sidebar */}

                <div className="hidden border-r border-slate-200 bg-slate-900 p-5 sm:block">

                  <div className="mb-8 text-lg font-semibold text-white">
                    Teckno-Space
                  </div>


                  <div className="space-y-2">

                    <PreviewNavigation
                      active
                      label="Dashboard"
                    />

                    <PreviewNavigation
                      label="Applications"
                    />

                    <PreviewNavigation
                      label="Analytics"
                    />

                    <PreviewNavigation
                      label="Workflows"
                    />

                    <PreviewNavigation
                      label="Settings"
                    />

                  </div>

                </div>


                {/* Preview Content */}

                <div className="bg-slate-50 p-6">

                  <div className="mb-7">

                    <div className="text-sm text-slate-500">
                      Welcome back
                    </div>

                    <div className="mt-1 text-2xl font-semibold text-slate-900">
                      Your Workspace
                    </div>

                  </div>


                  <div className="grid gap-4 sm:grid-cols-3">

                    <PreviewCard
                      icon={<Layers3 size={20} />}
                      title="Applications"
                      value="24"
                    />

                    <PreviewCard
                      icon={<Zap size={20} />}
                      title="Workflows"
                      value="12"
                    />

                    <PreviewCard
                      icon={<ShieldCheck size={20} />}
                      title="Security"
                      value="100%"
                    />

                  </div>


                  <div className="mt-6 grid gap-4 lg:grid-cols-2">

                    <div className="h-40 rounded-xl border border-slate-200 bg-white" />

                    <div className="h-40 rounded-xl border border-slate-200 bg-white" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section
        id="features"
        className="border-t border-slate-100 bg-slate-50 py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Everything connected
            </p>

            <h2
              className="
                mt-4
                font-heading
                text-4xl
                font-semibold
                tracking-tight
                text-slate-950
                sm:text-5xl
              "
            >
              One place for your entire workflow.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Stop switching between disconnected tools.
              Bring your workspace together and focus on
              what actually matters.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <FeatureCard
              icon={<Layers3 />}
              title="Unified Workspace"
              description="Access your enterprise applications and tools from a single dashboard."
            />

            <FeatureCard
              icon={<Zap />}
              title="Faster Workflows"
              description="Reduce context switching and get your work done faster with connected workflows."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Secure by Design"
              description="Keep your workspace protected with enterprise-ready authentication and access control."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <section
        id="solutions"
        className="border-t border-slate-100 bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Built for modern teams
              </p>

              <h2
                className="
                  mt-4
                  font-heading
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-slate-950
                  sm:text-5xl
                "
              >
                Your tools.
                <br />
                Your workflows.
                <br />
                One platform.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Teckno-Space is designed to become the central
                operating layer for your digital workplace.
              </p>

            </div>


            <div className="space-y-5">

              <SolutionItem text="Centralized application access" />

              <SolutionItem text="Unified employee workflows" />

              <SolutionItem text="Enterprise-ready authentication" />

              <SolutionItem text="Scalable application integrations" />

              <SolutionItem text="Personalized workspace experience" />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="border-t border-slate-100 bg-slate-50 py-24"
      >

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            About Teckno-Space
          </p>

          <h2
            className="
              mt-4
              font-heading
              text-4xl
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-5xl
            "
          >
            The workspace layer for your digital world.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We believe teams should spend less time navigating
            technology and more time creating value.
          </p>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div
            className="
              rounded-3xl
              bg-slate-900
              px-8
              py-16
              text-center
              sm:px-16
            "
          >

            <h2
              className="
                font-heading
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              Ready to simplify your workspace?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
              Create your workspace and bring everything
              together in one place.
            </p>


            <div className="mt-8">

              <Show when="signed-out">

                <SignUpButton mode="modal">

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-7
                      py-3
                      font-semibold
                      text-slate-900
                      transition
                      hover:bg-slate-100
                    "
                  >
                    Get Started

                    <ArrowRight size={17} />

                  </button>

                </SignUpButton>

              </Show>


              <Show when="signed-in">

                <Link
                  href="/dashboard"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-7
                    py-3
                    font-semibold
                    text-slate-900
                    transition
                    hover:bg-slate-100
                  "
                >
                  Open Workspace

                  <ArrowRight size={17} />

                </Link>

              </Show>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-slate-100 py-8">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-3
            px-6
            text-sm
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-8
          "
        >

          <span>
            © {new Date().getFullYear()} Teckno-Space
          </span>

          <span>
            Built for modern teams.
          </span>

        </div>

      </footer>

    </main>
  );
}


/* =============================================================
   FEATURE CARD
============================================================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-7
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-slate-100
          text-slate-700
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}


/* =============================================================
   PREVIEW CARD
============================================================= */

function PreviewCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <div className="flex items-center gap-2 text-slate-500">

        {icon}

        <span className="text-sm">
          {title}
        </span>

      </div>

      <div className="mt-4 text-3xl font-semibold text-slate-900">
        {value}
      </div>

    </div>
  );
}


/* =============================================================
   PREVIEW NAVIGATION
============================================================= */

function PreviewNavigation({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        rounded-lg
        px-3
        py-2
        text-sm
        ${
          active
            ? "bg-white/10 text-white"
            : "text-slate-400"
        }
      `}
    >
      {label}
    </div>
  );
}


/* =============================================================
   SOLUTION ITEM
============================================================= */

function SolutionItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">

        <CheckCircle2
          size={18}
          className="text-slate-700"
        />

      </div>

      <span className="text-lg text-slate-700">
        {text}
      </span>

    </div>
  );
}
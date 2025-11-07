"use client"

import * as React from "react"
import Image from "next/image"
import {
  Banknote,
  History,
  House,
  LogOut,
  Megaphone,
  Network,
  ShoppingCart,
  Ticket,
  UsersRound,
  Webhook,
} from "lucide-react"

import { NavGroup } from "@/components/nav-group"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Stephen Diala",
    email: "dialaegwuchukwu@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/46764458?s=400&u=9135924159f8f52146c2523d0e24fcc26b027569&v=4",
  },
  main: {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "#",
        icon: House,
      },
    ]
  },
  transactions: {
    label: "Transactions",
    items: [
      {
        title: "Order",
        url: "#",
        icon: ShoppingCart,
      },
      {
        title: "Add Funds",
        url: "#",
        icon: Banknote,
      },
      {
        title: "History",
        url: "#",
        icon: History,
      },
    ]
  },
  services: {
    label: "Services & Tools",
    items: [
      {
        title: "Services",
        url: "#",
        icon: Network,
      },
      {
        title: "API Setting",
        url: "#",
        icon: Webhook,
      },
    ]
  },
  comms: {
    label: "Communication",
    items: [
      {
        title: "Support Ticket",
        url: "#",
        icon: Ticket,
      },
      {
        title: "Notice",
        url: "#",
        icon: Megaphone,
      },
    ]
  },
  navSecondary: [
    {
      title: "Referral",
      url: "#",
      icon: UsersRound,
    },
    {
      title: "Sign Out",
      url: "#",
      icon: LogOut,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader className="px-4">
        <Image
          className="dark:invert"
          src="/afripay-logo.png"
          alt="Afripay Logo"
          width={100}
          height={20}
          priority
        />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup group={data.main} />
        <NavGroup group={data.transactions} />
        <NavGroup group={data.services} />
        <NavGroup group={data.comms} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

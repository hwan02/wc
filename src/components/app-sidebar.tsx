import {ChevronDown, Home} from "lucide-react"
import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from "@/components/ui/collapsible"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Menu items.
const projects = [
  {
    id: 1,
    title: "큰 사진",
    url: "#",
  },
  {
    id: 2,
    title: "예식 일시 장소",
    url: "#",
  },
  {
    id: 3,
    title: "혼주에게 연락하기",
    url: "#",
  },
  {
    id: 4,
    title: "달력표시",
    url: "#",
  },
  {
    id: 5,
    title: "D-Day",
    url: "#",
  },
  {
    id: 6,
    title: "BGM",
    url: "#",
  },
  {
    id: 7,
    title: "갤러리",
    href: '/home/gallery',
  },
  {
    id: 8,
    title: "오시는 길",
    url: "#",
  },
  {
    id: 9,
    title: "참석여부전달",
    url: "#",
  },
  {
    id: 10,
    title: "마음 전하실 곳",
    url: "#",
  },
  {
    id: 11,
    title: "안내사항",
    url: "#",
  },
  {
    id: 12,
    title: "방명록",
    url: "#",
  },
  {
    id: 13,
    title: "공유하기",
    url: "#",
  },
  {
    id: 14,
    title: "참석여부 팝업",
    url: "#",
  },
]

export function AppSidebar() {
  return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>WC</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem key="순서">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild isActive>
                        <a href="#">
                          <Home/>
                          <span>소개</span>
                          <ChevronDown className="ml-auto"/>
                        </a>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {projects.map((project) => (
                      <CollapsibleContent side="right" align="start" key={project.id}>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild isActive>
                              <a href="#">
                                <span>{project.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ))}
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
  )
}

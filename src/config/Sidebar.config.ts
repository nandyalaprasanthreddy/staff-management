export type Roles = "admin" | "staff";

type path = {
  text: string;
  path: string;
};
type SidebarProps = Record<Roles, path[]>;
export const SidebarItems: SidebarProps = {
  admin: [
    { text: "Shift-Creation", path: "/scheduleshift" },
    { text: "StaffList", path: "/stafflist" },
  ],
  staff: [{ text: "AssignShifts", path: "/assignShifts" }],
};

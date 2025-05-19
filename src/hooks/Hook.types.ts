export type User = {
  userid: string | null;
  role: string | null;
  userName: string | null;
} | null;

export type ContextAPIProps = {
  login: () => void;
  logout: () => void;
  user: User;
  setUser: (user: User) => void;
};

export type CreateContextprops = {
  children: React.ReactNode;
};

type GetPrivateDataOptions<TUser extends { id: string; email: string }> = {
  user: TUser;
};

export function getPrivateData<TUser extends { id: string; email: string }>({
  user,
}: GetPrivateDataOptions<TUser>) {
  return {
    message: "This is private",
    user,
  };
}

import { protectedProcedure, publicProcedure, router } from "../index";
import { getHealthCheck } from "../services/get-health-check";
import { getPrivateData } from "../services/get-private-data";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => getHealthCheck()),
  privateData: protectedProcedure.query(({ ctx }) => {
    return getPrivateData({ user: ctx.session.user });
  }),
});
export type AppRouter = typeof appRouter;

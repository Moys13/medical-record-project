import ApiResponseHandle from "@/libs/apiResponseHandle";
import { PrismaClient, user } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { compare } from "bcrypt";

const prisma = new PrismaClient();
export const POST = async (req: Request) => {
  try {
    const body: user = await req.json();
    const user = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      return Response.json(ApiResponseHandle(404, null, "Not Found"), {
        status: 404,
      });
    }

    const validationPassword = await compare(body.password, user.password);

    if (!validationPassword) {
      return Response.json(ApiResponseHandle(401, null, "Forbidden"), {
        status: 401,
      });
    }

    return Response.json(ApiResponseHandle(200, user, "Success"), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return Response.json(ApiResponseHandle(500, error.message, "Error"), {
        status: 500,
      });
    }
    return Response.json(ApiResponseHandle(500, null, "Error"), {
      status: 500,
    });
  }
};

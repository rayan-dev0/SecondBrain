import express from "express";
import mongoose, { mongo } from "mongoose";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ContentModel, LinkModel, UserModel } from "./db";
import { JWT_PASS } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.post("/api/v1/signup", async (req, res) => {
  //zod
  //hash the password
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User signed up",
    });
  } catch (err) {
    res.json({
      msg: "User already exists",
      error: err,
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const exisitngUser = await UserModel.findOne({
    username,
    password,
  });
  if (exisitngUser) {
    const token = jwt.sign(
      {
        id: exisitngUser._id,
      },
      JWT_PASS
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Incorrect Crede",
    });
  }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { link, type, contentId } = req.body;
  try {
    await ContentModel.create({
      link,
      type,
      title: req.body.title,
      //@ts-ignore
      userId: req.userId,
      tags: [],
      contentId: contentId || new mongoose.Types.ObjectId().toString(),
    });
    res.status(200).json({
      msg: "content added ",
    });
  } catch (e) {
    res.status(403).json({
      err: e,
    });
  }
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  try {
    const content = await ContentModel.find({
      userId: userId,
    }).populate("userId", "username");
    res.status(200).json({
      content,
    });
  } catch (e) {
    res.status(403).json({
      error: e,
    });
  }
});
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  try {
    await ContentModel.deleteOne({
      contentId,
      //@ts-ignore
      userId: req.userId,
    });
    res.status(200).json({
      msg: "content deleted",
    });
  } catch (e) {
    res.status(403).json({
      err: e,
    });
  }
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const { share } = req.body;
  if (share) {
    try {
      const exisitngLink = await LinkModel.findOne({
        //@ts-ignore
        userId:req.userId
      })

      if(exisitngLink){
        res.status(200).json({
          hash: exisitngLink.hash,
        });
        return
      }

      const hash = random(10);
      await LinkModel.create({
        //@ts-ignore
        userId: req.userId,
        hash: hash,
      });

      res.status(200).json({
        msg: "Update to Shareable",
        link: "/api/v1/brain/" + hash,
      });
    } catch (e) {
      res.status(403).json({
        error:e
      })
    }
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId,
    })
    res.json({
      msg:"Removed Link "
    })
  }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({
    hash: hash,
  });
  if (!link) {
    res.status(411).json({
      msg: "Incorrect Input",
    });
    return;
  }

  const content = await ContentModel.find({
    userId: link.userId,
  });
  const user = await UserModel.findOne({
    _id: link.userId
  });

  if (!user) {
    res.status(411).json({
      msg: "user not found , error should no happend ",
    });
    return;
  }

  res.json({
    username: user?.username,
    content: content,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

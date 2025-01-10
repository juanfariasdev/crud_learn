/*
  Warnings:

  - You are about to drop the column `urlImage` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `quizzes` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `quizzes` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "photoUrl" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "photoUrl" TEXT,
    "topicId" TEXT NOT NULL,
    CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("description", "id", "title", "topicId") SELECT "description", "id", "title", "topicId" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_UserProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "quizId" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserProgress" ("completed", "id", "topicId", "userId") SELECT "completed", "id", "topicId", "userId" FROM "UserProgress";
DROP TABLE "UserProgress";
ALTER TABLE "new_UserProgress" RENAME TO "UserProgress";
CREATE UNIQUE INDEX "UserProgress_userId_topicId_key" ON "UserProgress"("userId", "topicId");
CREATE TABLE "new_quizzes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "photoUrl" TEXT,
    "level" TEXT NOT NULL,
    "themeId" TEXT,
    "authorId" TEXT,
    CONSTRAINT "quizzes_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "quizzes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_quizzes" ("id", "label", "level") SELECT "id", "label", "level" FROM "quizzes";
DROP TABLE "quizzes";
ALTER TABLE "new_quizzes" RENAME TO "quizzes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

CREATE TABLE "users" (
"userid" SERIAL PRIMARY KEY,
"username" TEXT NOT NULL,
"email" TEXT NOT NULL,
"category" TEXT NOT NULL,
"phone" TEXT NOT NULL,
"password" TEXT NOT NULL,
"videotoken" integer NOT NULL,
"passportser" varchar(2) NOT NULL,
"position_category" TEXT NOT NULL,
"passportnumber" varchar(13) NOT NULL,
"syscreatedatutc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
);


CREATE TABLE "User_test" (
"User_testid" serial PRIMARY KEY,
"userid" integer NOT NULL,
"result" TEXT NOT NULL,
"syscreatedatutc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
)

CREATE TABLE "video" (
"videoid" serial PRIMARY KEY,
"userid" integer NOT NULL,
"result" TEXT NOT NULL,
"syscreatedatutc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
)
CREATE TABLE "news" (
"User_testid" serial PRIMARY KEY,
"userid" integer NOT NULL,
"result" TEXT NOT NULL,
"syscreatedatutc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
)

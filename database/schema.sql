-- set client_min_messages to warning;

-- -- DANGER: this is NOT how to do it in the real world.
-- -- `drop schema` INSTANTLY ERASES EVERYTHING.
-- drop schema "public" cascade;

-- create schema "public";

CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"user_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "routines" (
	"routine_id" serial NOT NULL,
	"date_start" DATE NOT NULL,
	"date_finished" DATE,
	"user_id" int NOT NULL,
	CONSTRAINT "routines_pk" PRIMARY KEY ("routine_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exercises" (
	"exercise_id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"favorited" BOOLEAN NOT NULL DEFAULT 'false',
	"routine_id" int NOT NULL,
	"user_id" int NOT NULL,
	"highest_weight" real NOT NULL DEFAULT '0',
	CONSTRAINT "exercises_pk" PRIMARY KEY ("exercise_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "stats" (
	"stats_id" serial NOT NULL,
	"set" int NOT NULL DEFAULT '1',
	"reps" int NOT NULL,
	"weight" real NOT NULL,
	"exercise_id" int NOT NULL,
	CONSTRAINT "stats_pk" PRIMARY KEY ("stats_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "routines" ADD CONSTRAINT "routines_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "exercises" ADD CONSTRAINT "exercises_fk0" FOREIGN KEY ("routine_id") REFERENCES "routines"("routine_id");
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "stats" ADD CONSTRAINT "stats_fk0" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id");

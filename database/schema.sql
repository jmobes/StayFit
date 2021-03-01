CREATE TABLE "users" (
    "user_id" SERIAL   NOT NULL,
    "user_name" varchar(255)   NOT NULL,
    "email" varchar(255)   NOT NULL,
    "password" varchar(255)   NOT NULL,
    CONSTRAINT "pk_users" PRIMARY KEY (
        "user_id"
     ),
    CONSTRAINT "uc_users_email" UNIQUE (
        "email"
    )
);

CREATE TABLE "routines" (
    "routine_id" SERIAL   NOT NULL,
    "date_start" date DEFAULT CURRENT_DATE,
    "date_end" date,
    "user_id" int   NOT NULL,
    CONSTRAINT "pk_routines" PRIMARY KEY (
        "routine_id"
     )
);

CREATE TABLE "exercises" (
    "exercise_id" SERIAL   NOT NULL,
    "user_id" int   NOT NULL,
    "name" varchar(255)   NOT NULL,
    CONSTRAINT "pk_exercises" PRIMARY KEY (
        "exercise_id"
     )
);

CREATE TABLE "routine_exercises" (
    "routine_id" int   NOT NULL,
    "exercise_id" int   NOT NULL
);

-- user_exercises as ue
-- ------------------------
-- user_exercise_id PK int
-- user_id int FK >- u.user_id
-- exercise_id int FK >- e.exercise_id
CREATE TABLE "stats" (
    "stats_id" SERIAL   NOT NULL,
    "set" int   NOT NULL,
    "reps" int   NOT NULL,
    "weight" real   NOT NULL,
    "exercise_id" int   NOT NULL,
    "user_id" int   NOT NULL,
    CONSTRAINT "pk_stats" PRIMARY KEY (
        "stats_id"
     )
);

ALTER TABLE "routines" ADD CONSTRAINT "fk_routines_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("user_id");

ALTER TABLE "exercises" ADD CONSTRAINT "fk_exercises_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("user_id");

ALTER TABLE "routine_exercises" ADD CONSTRAINT "fk_routine_exercises_routine_id" FOREIGN KEY("routine_id")
REFERENCES "routines" ("routine_id");

ALTER TABLE "routine_exercises" ADD CONSTRAINT "fk_routine_exercises_exercise_id" FOREIGN KEY("exercise_id")
REFERENCES "exercises" ("exercise_id");

ALTER TABLE "stats" ADD CONSTRAINT "fk_stats_exercise_id" FOREIGN KEY("exercise_id")
REFERENCES "exercises" ("exercise_id");

ALTER TABLE "stats" ADD CONSTRAINT "fk_stats_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("user_id");

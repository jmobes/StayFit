
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
    "date_start" date  DEFAULT CURRENT_DATE,
    "date_end" date ,
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
    "routine_exercise_id" SERIAL PRIMARY KEY   NOT NULL,
    "routine_id" int   NOT NULL,
    "exercise_id" int   NOT NULL
);

CREATE TABLE "stats" (
    "stats_id" SERIAL   NOT NULL,
    "reps" int   NOT NULL,
    "weight" real   NOT NULL,
    "routine_exercise_id" int   NOT NULL,
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

ALTER TABLE "stats" ADD CONSTRAINT "fk_stats_routine_exercise_id" FOREIGN KEY("routine_exercise_id")
REFERENCES "routine_exercises" ("routine_exercise_id");

ALTER TABLE "stats" ADD CONSTRAINT "fk_stats_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("user_id");

INSERT INTO users(user_name, email, password) VALUES ('root', 'root@root.com', 'root123');
INSERT INTO exercises(user_id, name) VALUES ('1', 'squat');
INSERT INTO exercises(user_id, name) VALUES ('1', 'chest press');
INSERT INTO exercises(user_id, name) VALUES ('1', 'deadlift');
INSERT INTO exercises(user_id, name) VALUES ('1', 'leg press');
INSERT INTO exercises(user_id, name) VALUES ('1', 'overhead press');
INSERT INTO exercises(user_id, name) VALUES ('1', 'biceps arm curl');
INSERT INTO exercises(user_id, name) VALUES ('1', 'tricep pushdown');
INSERT INTO exercises(user_id, name) VALUES ('1', 'seated cable row');
INSERT INTO exercises(user_id, name) VALUES ('1', 'lat pulldown');
INSERT INTO exercises(user_id, name) VALUES ('1', 'preacher curls');
INSERT INTO exercises(user_id, name) VALUES ('1', 'hamstring curls');
INSERT INTO exercises(user_id, name) VALUES ('1', 'skull crushers');
INSERT INTO exercises(user_id, name) VALUES ('1', 'calf raises');

(this["webpackJsonpstay-fit"] = this["webpackJsonpstay-fit"] || []).push([
  [0],
  {
    100: function (e, t, r) {},
    101: function (e, t, r) {},
    102: function (e, t, r) {},
    103: function (e, t, r) {},
    104: function (e, t, r) {},
    200: function (e, t, r) {},
    201: function (e, t, r) {},
    202: function (e, t, r) {},
    204: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = r(0),
        c = r.n(s),
        n = r(33),
        a = r.n(n),
        i = r(5),
        o = r.n(i),
        l = r(7),
        u = r(4),
        _ = r(9),
        j = r(6),
        d = (r(83), r(84), r(35)),
        b = r.n(d),
        h = r(37),
        x = r.n(h),
        p = r(1),
        O = Object(j.g)(function (e) {
          var t = Object(s.useState)(""),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(""),
            i = Object(u.a)(a, 2),
            _ = i[0],
            j = i[1],
            d = (function () {
              var t = Object(l.a)(
                o.a.mark(function t(r) {
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            r.preventDefault(), (t.next = 3), e.login(c, _)
                          );
                        case 3:
                          t.sent && e.history.push("/");
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return Object(p.jsxs)("form", {
            onSubmit: d,
            className: "form__login",
            children: [
              Object(p.jsxs)("div", {
                className: "".concat(
                  e.error ? "form__login__email error" : "form__login__email"
                ),
                children: [
                  Object(p.jsx)(b.a, {
                    className: "icon-email",
                    style: { fontSize: 30, color: "#fff" },
                  }),
                  Object(p.jsx)("input", {
                    type: "email",
                    className: "form__login__email__input",
                    placeholder: "".concat(
                      e.error ? "Invalid email" : "stayfit@gmail.com"
                    ),
                    onChange: function (e) {
                      return n(e.target.value);
                    },
                    value: c,
                  }),
                ],
              }),
              Object(p.jsxs)("div", {
                className: "".concat(
                  e.error
                    ? "form__login__password error"
                    : "form__login__password"
                ),
                children: [
                  Object(p.jsx)(x.a, {
                    className: "icon-password",
                    style: { fontSize: 30, color: "#fff" },
                  }),
                  Object(p.jsx)("input", {
                    type: "password",
                    className: "form__login__password__input",
                    placeholder: "".concat(
                      e.error ? "Invalid password" : "password"
                    ),
                    onChange: function (e) {
                      return j(e.target.value);
                    },
                    value: _,
                  }),
                ],
              }),
              Object(p.jsx)("input", {
                type: "submit",
                value: "Login",
                className: "button__login",
              }),
            ],
          });
        }),
        m =
          (r(94),
          function (e) {
            return Object(p.jsx)("div", {
              className: "spinner__container",
              children: Object(p.jsx)("div", {
                className: "spinner__overlay",
                children: Object(p.jsx)("div", { className: "spinner" }),
              }),
            });
          }),
        f = Object(j.g)(function (e) {
          return Object(p.jsxs)(p.Fragment, {
            children: [
              e.loading ? Object(p.jsx)(m, {}) : null,
              Object(p.jsx)(O, { login: e.login, error: e.error }),
              Object(p.jsxs)("p", {
                className: "login__guest",
                children: [
                  "Login as",
                  " ",
                  Object(p.jsx)("span", {
                    onClick: Object(l.a)(
                      o.a.mark(function t() {
                        return o.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  e.login("guest@guest.com", "guest")
                                );
                              case 2:
                                t.sent && e.history.push("/");
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    className: "login__guest--text",
                    children: "GUEST",
                  }),
                ],
              }),
              Object(p.jsxs)("p", {
                className: "link__signup",
                children: [
                  "Don't have an account?",
                  " ",
                  Object(p.jsx)(_.b, {
                    to: "/signup",
                    children: Object(p.jsx)("span", {
                      className: "link__signup--text",
                      children: "Signup here",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        g = (r(95), r(72)),
        v = r.n(g),
        N = Object(j.g)(function (e) {
          var t = Object(s.useState)(""),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(""),
            i = Object(u.a)(a, 2),
            j = i[0],
            d = i[1],
            h = Object(s.useState)(""),
            O = Object(u.a)(h, 2),
            m = O[0],
            f = O[1],
            g = Object(s.useState)(!1),
            N = Object(u.a)(g, 2),
            w = N[0],
            S = N[1],
            k = Object(s.useState)(!1),
            y = Object(u.a)(k, 2),
            E = y[0],
            C = y[1],
            T = Object(s.useState)(!1),
            I = Object(u.a)(T, 2),
            L = I[0],
            z = I[1],
            J = Object(s.useState)(""),
            D = Object(u.a)(J, 2),
            P = D[0],
            F = D[1],
            R = (function () {
              var t = Object(l.a)(
                o.a.mark(function t(r) {
                  var s, n, a;
                  return o.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((r.preventDefault(), c && j && m)) {
                              t.next = 4;
                              break;
                            }
                            return (
                              F("Please fill out all fields"),
                              t.abrupt("return")
                            );
                          case 4:
                            return (
                              (s = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  username: c,
                                  email: j,
                                  password: m,
                                }),
                              }),
                              (t.prev = 5),
                              (t.next = 8),
                              fetch("/api/users", s)
                            );
                          case 8:
                            return (n = t.sent), (t.next = 11), n.json();
                          case 11:
                            if (((a = t.sent), n.ok)) {
                              t.next = 14;
                              break;
                            }
                            throw new Error(a);
                          case 14:
                            e.history.push("/"), (t.next = 20);
                            break;
                          case 17:
                            (t.prev = 17), (t.t0 = t.catch(5)), F(t.t0.message);
                          case 20:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[5, 17]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return Object(p.jsxs)(p.Fragment, {
            children: [
              Object(p.jsxs)("form", {
                onSubmit: R,
                className: "form__signup",
                children: [
                  Object(p.jsxs)("div", {
                    className: "".concat(
                      !c && w
                        ? "form__signup__username form__signup__error"
                        : "form__signup__username"
                    ),
                    children: [
                      Object(p.jsx)(v.a, {
                        className: "icon-person",
                        style: { fontSize: 30, color: "#fff" },
                      }),
                      Object(p.jsx)("input", {
                        type: "text",
                        className: "form__signup__username__input",
                        placeholder: "username",
                        onChange: function (e) {
                          return n(e.target.value);
                        },
                        value: c,
                        required: !0,
                        onBlur: function () {
                          return S(!0);
                        },
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    className: "".concat(
                      !j && E
                        ? "form__signup__email form__signup__error"
                        : "form__signup__email"
                    ),
                    children: [
                      Object(p.jsx)(b.a, {
                        className: "icon-email",
                        style: { fontSize: 30, color: "#fff" },
                      }),
                      Object(p.jsx)("input", {
                        type: "email",
                        className: "form__signup__email__input",
                        placeholder: "stayfit@gmail.com",
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                        value: j,
                        required: !0,
                        onBlur: function () {
                          return C(!0);
                        },
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    className: "".concat(
                      !m && L
                        ? "form__signup__password form__signup__error"
                        : "form__signup__password"
                    ),
                    children: [
                      Object(p.jsx)(x.a, {
                        className: "icon-password",
                        style: { fontSize: 30, color: "#fff" },
                      }),
                      Object(p.jsx)("input", {
                        type: "password",
                        className: "form__signup__password__input",
                        placeholder: "password",
                        onChange: function (e) {
                          return f(e.target.value);
                        },
                        value: m,
                        required: !0,
                        onBlur: function () {
                          return z(!0);
                        },
                      }),
                    ],
                  }),
                  P &&
                    Object(p.jsx)("p", {
                      className: "signup__error",
                      children: P,
                    }),
                  Object(p.jsx)("input", {
                    type: "submit",
                    value: "Signup",
                    className: "button__signup",
                  }),
                ],
              }),
              Object(p.jsx)(_.b, {
                to: "/login",
                children: Object(p.jsx)("p", {
                  className: "signup__cancel",
                  children: "Back to Login",
                }),
              }),
            ],
          });
        }),
        w =
          (r(96),
          r(97),
          Object(j.g)(function (e) {
            return Object(p.jsx)("button", {
              onClick: function () {
                e.logout && e.logout(),
                  e.history.push(e.logout ? "/login" : "/");
              },
              className: "header__button",
              children: e.text,
            });
          })),
        S = r(38),
        k = r.n(S),
        y = r(39),
        E = r.n(y),
        C = r(40),
        T = r.n(C),
        I = r(41),
        L = r.n(I),
        z = function (e) {
          return Object(p.jsx)("div", {
            className: "home",
            children: Object(p.jsx)("div", {
              className: "home__nav",
              children: Object(p.jsxs)("ul", {
                className: "home__nav__list",
                children: [
                  Object(p.jsx)(_.b, {
                    to: "/workout",
                    children: Object(p.jsxs)("li", {
                      className: "home__nav__list__item",
                      children: [
                        Object(p.jsx)("div", {
                          className: "home__nav__list__item--bg",
                          children: Object(p.jsx)(k.a, {
                            style: { fontSize: 100 },
                          }),
                        }),
                        Object(p.jsx)("p", {
                          className: "home__nav__list__item__text",
                          children: "workout",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(_.b, {
                    to: "/history",
                    children: Object(p.jsxs)("li", {
                      className: "home__nav__list__item",
                      children: [
                        Object(p.jsx)("div", {
                          className: "home__nav__list__item--bg",
                          children: Object(p.jsx)(E.a, {
                            style: { fontSize: 100 },
                          }),
                        }),
                        Object(p.jsx)("p", {
                          className: "home__nav__list__item__text",
                          children: "history",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(_.b, {
                    to: "/progress",
                    children: Object(p.jsxs)("li", {
                      className: "home__nav__list__item",
                      children: [
                        Object(p.jsx)("div", {
                          className: "home__nav__list__item--bg",
                          children: Object(p.jsx)(T.a, {
                            style: { fontSize: 100 },
                          }),
                        }),
                        Object(p.jsx)("p", {
                          className: "home__nav__list__item__text",
                          children: "progress",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(_.b, {
                    to: "/records",
                    children: Object(p.jsxs)("li", {
                      className: "home__nav__list__item",
                      children: [
                        Object(p.jsx)("div", {
                          className: "home__nav__list__item--bg",
                          children: Object(p.jsx)(L.a, {
                            style: { fontSize: 100 },
                          }),
                        }),
                        Object(p.jsx)("p", {
                          className: "home__nav__list__item__text",
                          children: "records",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        J = r(25),
        D =
          (r(98),
          r(99),
          function (e) {
            var t = Object(s.useState)(""),
              r = Object(u.a)(t, 2),
              c = r[0],
              n = r[1],
              a = Object(s.useState)(),
              i = Object(u.a)(a, 2),
              o = (i[0], i[1], Object(s.useState)()),
              l = Object(u.a)(o, 2),
              _ = l[0],
              j = l[1];
            return Object(p.jsxs)("div", {
              className: "exercise__create",
              children: [
                Object(p.jsx)("p", {
                  className: "exercise__create__title",
                  children: "Exercise Name",
                }),
                Object(p.jsx)("input", {
                  placeholder: "barbell squat",
                  type: "text",
                  className: "exercise__create__input",
                  onChange: function (e) {
                    return n(e.target.value);
                  },
                }),
                _
                  ? Object(p.jsx)("p", {
                      className: "exercise__create__error",
                      children: _,
                    })
                  : null,
                Object(p.jsx)("button", {
                  onClick: function () {
                    var t = JSON.parse(
                      localStorage.getItem("user")
                    ).userId.toString();
                    if (!c || c.length < 3 || !t)
                      j("Exercise must be at least 3 characters");
                    else {
                      var r = { user_id: t, name: c },
                        s = {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(r),
                        };
                      fetch("/api/exercises", s)
                        .then(function (e) {
                          if (!e.ok) throw new Error("Duplicate Exercise");
                          return e.json();
                        })
                        .then(function (t) {
                          e.hideCreateExercise();
                        })
                        .catch(function (e) {
                          return j(
                            e.message ||
                              "Network error. Unable to create exercise."
                          );
                        });
                    }
                  },
                  className: "exercise__create__btn--add",
                  children: "Add Exercise",
                }),
                Object(p.jsx)("button", {
                  onClick: e.hideCreateExercise,
                  className: "exercise__create__btn--cancel",
                  children: "Cancel",
                }),
              ],
            });
          }),
        P = (r(100), r(20)),
        F = r.n(P),
        R = function (e) {
          var t = Object(s.useState)(),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(),
            i = Object(u.a)(a, 2),
            _ = i[0],
            j = i[1],
            d = Object(s.useState)([{ set: 1, weight: "", reps: "" }]),
            b = Object(u.a)(d, 2),
            h = b[0],
            x = b[1],
            O = Object(s.useState)(""),
            m = Object(u.a)(O, 2),
            f = m[0],
            g = m[1],
            v = Object(s.useState)(),
            N = Object(u.a)(v, 2),
            w = (N[0], N[1]),
            S = Object(s.useState)(!1),
            k = Object(u.a)(S, 2),
            y = k[0],
            E = k[1],
            C = Object(s.useRef)();
          Object(s.useEffect)(function () {
            var t = JSON.parse(localStorage.getItem("user"));
            if (t) {
              var r = t.userId;
              return (
                n(e.exercise.exercise_id),
                j(r),
                function () {
                  E(!1);
                }
              );
            }
          }, []),
            Object(s.useEffect)(
              function () {
                C.current.focus();
              },
              [h.length]
            );
          var T = function (e) {
              if (Number(e.target.value) || "" === e.target.value) {
                var t = Object(J.a)(h);
                (t[e.target.dataset.index][e.target.dataset.category] =
                  e.target.value),
                  x(t);
              }
            },
            I = function (e) {
              try {
                h.map(function (t) {
                  var r = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      reps: t.reps,
                      weight: t.weight,
                      routine_exercise_id: e.toString(),
                      user_id: _.toString(),
                    }),
                  };
                  fetch("/api/stats", r)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return w(e);
                    })
                    .catch(function (e) {
                      return g("Network error. Unable to add set(s).");
                    });
                });
              } catch (t) {
                g(t.message);
              }
            },
            L = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, r, s, c, n;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              fetch("/api/routines/null-date/".concat(_))
                            );
                          case 5:
                            return (t = e.sent), (e.next = 8), t.json();
                          case 8:
                            if (!((r = e.sent).length > 0)) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              new Promise(function (e, t) {
                                e(r[0].routine_id);
                              })
                            );
                          case 11:
                            return (
                              (s = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ user_id: _.toString() }),
                              }),
                              (e.next = 14),
                              fetch("/api/routines", s)
                            );
                          case 14:
                            return (c = e.sent), (e.next = 17), c.json();
                          case 17:
                            return (
                              (n = e.sent),
                              e.abrupt(
                                "return",
                                new Promise(function (e, t) {
                                  e(n.routine_id);
                                })
                              )
                            );
                          case 21:
                            (e.prev = 21),
                              (e.t0 = e.catch(2)),
                              g("Network error. Unable to log exercise.");
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 21]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            z = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var r, s, n, a;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (((e.prev = 2), (r = t) && c)) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (
                              (s = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  routine_id: r.toString(),
                                  exercise_id: c.toString(),
                                }),
                              }),
                              (e.next = 9),
                              fetch("/api/routine-exercises", s)
                            );
                          case 9:
                            return (n = e.sent), (e.next = 12), n.json();
                          case 12:
                            return (
                              (a = e.sent),
                              e.abrupt(
                                "return",
                                new Promise(function (e, t) {
                                  e(a.routine_exercise_id);
                                })
                              )
                            );
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(2)),
                              g("Network error. Unable to log exercise.");
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 16]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(p.jsxs)("div", {
            className: "log__exercise",
            children: [
              Object(p.jsx)("h3", {
                className: "log__exercise__title",
                children: e.exercise.name,
              }),
              Object(p.jsxs)("div", {
                className: "log__exercise__data",
                children: [
                  Object(p.jsxs)("div", {
                    className: "log__exercise__data__columns",
                    children: [
                      Object(p.jsx)("h4", {
                        className: "log__exercise__data__column",
                        children: "Set",
                      }),
                      Object(p.jsx)("h4", {
                        className: "log__exercise__data__column",
                        children: "Weight",
                      }),
                      Object(p.jsx)("h4", {
                        className: "log__exercise__data__column",
                        children: "Reps",
                      }),
                    ],
                  }),
                  Object(p.jsx)("div", {
                    className: "log__exercise__data__rows",
                    children: h.map(function (e, t) {
                      return Object(p.jsxs)(
                        "div",
                        {
                          className: "log__exercise__data__row",
                          children: [
                            Object(p.jsx)("input", {
                              placeholder: "set",
                              type: "text",
                              className: "log__exercise__data__row__item",
                              value: e.set,
                              readOnly: !0,
                              "data-category": "set",
                              "data-index": t,
                            }),
                            Object(p.jsx)("input", {
                              placeholder: "weight",
                              type: "text",
                              className: "log__exercise__data__row__item",
                              "data-category": "weight",
                              "data-index": t,
                              value: h[t].weight,
                              onChange: T,
                              ref: C,
                            }),
                            Object(p.jsx)("input", {
                              placeholder: "reps",
                              type: "text",
                              className: "log__exercise__data__row__item",
                              "data-category": "reps",
                              "data-index": t,
                              value: h[t].reps,
                              onChange: T,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
              Object(p.jsx)(F.a, {
                onClick: function () {
                  x(
                    [].concat(Object(J.a)(h), [
                      { set: h.length + 1, weight: "", reps: "" },
                    ])
                  );
                },
                style: { fontSize: 50 },
                className: "add__set__button",
              }),
              Object(p.jsxs)("div", {
                className: "log__exercise__buttons",
                children: [
                  f &&
                    Object(p.jsx)("p", {
                      className: "log__exercise__error",
                      children: f,
                    }),
                  Object(p.jsx)("button", {
                    onClick: Object(l.a)(
                      o.a.mark(function t() {
                        var r, s;
                        return o.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!y) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  return (
                                    E(!0),
                                    (t.prev = 3),
                                    h.map(function (e) {
                                      Object.values(e).forEach(function (e, t) {
                                        if (!e)
                                          throw new Error(
                                            "Please fill out all fields"
                                          );
                                      });
                                    }),
                                    (t.next = 7),
                                    L()
                                  );
                                case 7:
                                  return (r = t.sent), (t.next = 10), z(r);
                                case 10:
                                  if ((s = t.sent)) {
                                    t.next = 13;
                                    break;
                                  }
                                  throw new Error(
                                    "Network error. Unable to add sets."
                                  );
                                case 13:
                                  I(s), e.hideLogExercise(), (t.next = 20);
                                  break;
                                case 17:
                                  (t.prev = 17),
                                    (t.t0 = t.catch(3)),
                                    g(t.t0.message);
                                case 20:
                                  E(!1);
                                case 21:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[3, 17]]
                        );
                      })
                    ),
                    className: "log__exercise__button",
                    children: "Log Exercise",
                  }),
                  Object(p.jsx)("button", {
                    onClick: e.hideLogExercise,
                    className: "cancel__exercise__button",
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          });
        },
        U = (r(101), r(102), r(52)),
        A = r.n(U),
        W = function (e) {
          var t = JSON.parse(localStorage.getItem("user")).userId;
          return Object(p.jsxs)("div", {
            className: "exercise__list__item__container",
            children: [
              Object(p.jsx)("p", {
                onClick: function () {
                  return e.showLogExercise(e.exercise);
                },
                className: "exercise__list__item",
                children: e.exercise.name,
              }),
              e.showEdit &&
                t === e.exercise.user_id &&
                Object(p.jsx)(A.a, {
                  className: "exercise__list__item__icon",
                  style: { fontSize: 25 },
                  onClick: function () {
                    return e.delete(e.exercise.exercise_id);
                  },
                }),
            ],
          });
        },
        q = function (e) {
          var t = Object(s.useState)(),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(!1),
            i = Object(u.a)(a, 2),
            o = i[0],
            l = i[1],
            _ = Object(s.useState)(),
            j = Object(u.a)(_, 2),
            d = j[0],
            b = j[1];
          Object(s.useEffect)(function () {
            var e = JSON.parse(localStorage.getItem("user"));
            if (e) {
              var t = e.token,
                r = e.userId;
              fetch("/api/exercises/".concat(r), {
                headers: { Authorization: t },
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return n(e);
                })
                .catch(function (e) {
                  return b("Network error. Cannot retrieve exercises.");
                });
            } else n(null);
          }, []);
          var h = function (e) {
            fetch("/api/routine-data/".concat(e), {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return n(
                  c.filter(function (t) {
                    return t.exercise_id !== e.exercise_id;
                  })
                );
              })
              .catch(function (e) {
                return b("Network error. Unable to process request.");
              });
          };
          return Object(p.jsxs)("div", {
            className: "exercise__list",
            children: [
              Object(p.jsxs)("div", {
                className: "exercise__list__headers",
                children: [
                  Object(p.jsx)("div", {
                    onClick: function () {
                      return e.showList(!1);
                    },
                    className: "exercise__list__headers__cancel",
                    children: "cancel",
                  }),
                  Object(p.jsx)("div", {
                    onClick: function () {
                      return l(!o);
                    },
                    className: "exercise__list__headers__edit ".concat(
                      o ? "exercise__list__headers__edit--active" : ""
                    ),
                    children: "edit",
                  }),
                  Object(p.jsx)(F.a, {
                    className: "exercise__list__headers__add",
                    style: { fontSize: 35 },
                    onClick: e.showAddExercise,
                  }),
                ],
              }),
              Object(p.jsx)("div", {
                className: "exercise__list__container",
                children:
                  c && !d
                    ? c.map(function (t) {
                        return Object(p.jsx)(
                          W,
                          {
                            exercise: t,
                            delete: h,
                            showEdit: o,
                            showLogExercise: e.showLogExercise,
                          },
                          t.exercise_id
                        );
                      })
                    : Object(p.jsx)("p", {
                        className: "exercise__list__error",
                        children: d,
                      }),
              }),
            ],
          });
        },
        B = function (e) {
          return Object(p.jsx)(q, {
            showList: e.showList,
            showAddExercise: e.showAddExercise,
            showLogExercise: e.showLogExercise,
          });
        },
        M = r(73),
        Y = r.n(M),
        G = function (e) {
          return Object(p.jsxs)(c.a.Fragment, {
            children: [
              Object(p.jsxs)("div", {
                className: "workout__select",
                onClick: function () {
                  return e.setDisplayExercises(!0);
                },
                children: [
                  Object(p.jsx)("p", {
                    className: "workout__select__title",
                    children: "select exercise",
                  }),
                  Object(p.jsx)(F.a, {
                    className: "workout__select__icon",
                    style: { fontSize: 30 },
                  }),
                ],
              }),
              Object(p.jsxs)("div", {
                className: "workout__data",
                children: [
                  Object(p.jsx)("div", {
                    className: "workout__data__ctn",
                    children: Object(p.jsx)("div", {
                      className: "workout__data__row",
                      children:
                        e.routine && e.routine.length && !e.error
                          ? e.routine.map(function (t, r, s) {
                              var c = s[r - 1];
                              s[r + 1];
                              return c && c.name === t.name
                                ? null
                                : Object(p.jsxs)(
                                    "div",
                                    {
                                      className: "workout__data__exercise",
                                      children: [
                                        Object(p.jsx)("p", {
                                          className:
                                            "workout__data__exercise__name",
                                          children: t.name,
                                        }),
                                        Object(p.jsx)(Y.a, {
                                          style: { fontSize: 35 },
                                          className:
                                            "workout__data__exercise__delete",
                                          onClick: function () {
                                            return e.deleteExerciseFromRoutine(
                                              t.exercise_id,
                                              e.routineId
                                            );
                                          },
                                        }),
                                      ],
                                    },
                                    r
                                  );
                            })
                          : Object(p.jsx)("p", { children: e.error }),
                    }),
                  }),
                  e.routine && e.routine.length
                    ? Object(p.jsx)("button", {
                        onClick: e.logWorkout,
                        className: "log__workout",
                        children: "Log Workout",
                      })
                    : null,
                ],
              }),
            ],
          });
        },
        H = function (e) {
          var t = Object(s.useState)(!1),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(!1),
            i = Object(u.a)(a, 2),
            _ = i[0],
            j = i[1],
            d = Object(s.useState)(!1),
            b = Object(u.a)(d, 2),
            h = b[0],
            x = b[1],
            O = Object(s.useState)(null),
            m = Object(u.a)(O, 2),
            f = m[0],
            g = m[1],
            v = Object(s.useState)(),
            N = Object(u.a)(v, 2),
            w = N[0],
            S = N[1],
            y = Object(s.useState)(),
            E = Object(u.a)(y, 2),
            C = E[0],
            T = E[1],
            I = Object(s.useState)(!1),
            L = Object(u.a)(I, 2),
            z = L[0],
            P = L[1],
            F = Object(s.useState)(),
            U = Object(u.a)(F, 2),
            A = U[0],
            W = U[1],
            q = Object(s.useState)(!1),
            M = Object(u.a)(q, 2),
            Y = M[0],
            H = M[1];
          Object(s.useEffect)(
            Object(l.a)(
              o.a.mark(function e() {
                var t, r, s, c, n, a, i;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t = JSON.parse(localStorage.getItem("user")))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (r = t.userId),
                            (e.prev = 4),
                            (e.next = 7),
                            fetch("/api/routines/null-date/".concat(r))
                          );
                        case 7:
                          return (s = e.sent), (e.next = 10), s.json();
                        case 10:
                          if (!((c = e.sent).length < 1)) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return");
                        case 13:
                          return (
                            (n = c[0].routine_id),
                            T(n),
                            (e.next = 17),
                            fetch("/api/routine-data/".concat(r, "/").concat(n))
                          );
                        case 17:
                          return (a = e.sent), (e.next = 20), a.json();
                        case 20:
                          (i = e.sent), S(i), (e.next = 27);
                          break;
                        case 24:
                          (e.prev = 24),
                            (e.t0 = e.catch(4)),
                            W("Network error. Could not process request.");
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 24]]
                );
              })
            ),
            [c, _, h]
          );
          var K,
            Q = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t, r) {
                  var s, c, n, a;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!Y) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (Number(t) && Number(r)) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              H(!0),
                              (e.prev = 5),
                              (e.next = 8),
                              fetch("/api/stats/".concat(r, "/").concat(t), {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" },
                              })
                            );
                          case 8:
                            return (s = e.sent), (e.next = 11), s.json();
                          case 11:
                            (c = e.sent),
                              (n = Object(J.a)(w)),
                              (a = n.filter(function (e) {
                                return (
                                  e.routine_exercise_id !==
                                  c[0].routine_exercise_id
                                );
                              })),
                              S(a),
                              (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(5)),
                              W("Network error. Try again later");
                          case 20:
                            H(!1);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 17]]
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            V = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, r;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!Y) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (C) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              H(!0),
                              (t = {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                              }),
                              (e.prev = 6),
                              (e.next = 9),
                              fetch("/api/routines/".concat(C), t)
                            );
                          case 9:
                            return (r = e.sent), (e.next = 12), r.json();
                          case 12:
                            e.sent,
                              S(null),
                              T(null),
                              P(!0),
                              setTimeout(function () {
                                P(!1);
                              }, 5e3),
                              (e.next = 22);
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(6)),
                              W("Network error. Could not process request.");
                          case 22:
                            H(!1);
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 19]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (K = c
              ? Object(p.jsx)(B, {
                  showList: n,
                  showAddExercise: function () {
                    j(!0), n(!1);
                  },
                  showLogExercise: function (e) {
                    x(!0), n(!1), g(e);
                  },
                })
              : _
              ? Object(p.jsx)(D, {
                  hideCreateExercise: function () {
                    return j(!1);
                  },
                })
              : h
              ? Object(p.jsx)(R, {
                  hideLogExercise: function () {
                    x(!1);
                  },
                  exercise: f,
                })
              : Object(p.jsx)(G, {
                  setDisplayExercises: n,
                  routine: w,
                  deleteExerciseFromRoutine: Q,
                  routineId: C,
                  logWorkout: V,
                  error: A,
                })),
            Object(p.jsxs)("div", {
              className: "workout",
              children: [
                Object(p.jsxs)("div", {
                  className: "workout__title",
                  children: [
                    Object(p.jsx)(k.a, {
                      className: "workout__icon",
                      style: { fontSize: 100 },
                    }),
                    Object(p.jsx)("h3", {
                      className: "workout__text",
                      children: "WORKOUT",
                    }),
                    h
                      ? Object(p.jsxs)("p", {
                          className: "workout__instructions",
                          children: [
                            "Enter exercise data. Click the ",
                            Object(p.jsx)("span", { children: "+" }),
                            " icon to add a new set.",
                          ],
                        })
                      : Object(p.jsx)("p", {
                          className: "workout__instructions",
                          children:
                            "Select or create an exercise from the dropdown list to get started",
                        }),
                  ],
                }),
                K,
                Object(p.jsx)("div", {
                  className: "message__modal ".concat(z ? "" : "hidden"),
                  children: Object(p.jsx)("p", {
                    className: "message__text",
                    children: "Workout Logged",
                  }),
                }),
              ],
            })
          );
        },
        K = r(75),
        Q =
          (r(103),
          function (e) {
            var t = Object(s.useState)(new Date()),
              r = Object(u.a)(t, 2),
              n = r[0],
              a = (r[1], Object(s.useState)()),
              i = Object(u.a)(a, 2),
              o = i[0],
              l = i[1],
              _ = Object(s.useState)(),
              j = Object(u.a)(_, 2),
              d = j[0],
              b = j[1],
              h = Object(s.useState)(),
              x = Object(u.a)(h, 2),
              O = x[0],
              m = x[1],
              f = Object(s.useState)(),
              g = Object(u.a)(f, 2),
              v = g[0],
              N = g[1],
              w = Object(s.useState)(!1),
              S = Object(u.a)(w, 2),
              k = S[0],
              y = S[1],
              C = function (e) {
                var t = e.getFullYear(),
                  r =
                    e.getMonth() + 1 < 10
                      ? "0" + (e.getMonth() + 1)
                      : e.getMonth() + 1,
                  s = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
                return "".concat(t, "-").concat(r, "-").concat(s);
              };
            return (
              Object(s.useEffect)(function () {
                !(function () {
                  var e = JSON.parse(localStorage.getItem("user")).userId;
                  b(e);
                  var t = [];
                  fetch("/api/routines/".concat(e))
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      e.map(function (e) {
                        if (e.date_end) {
                          var r = e.date_end.split("T");
                          t.push(r[0]);
                        }
                      }),
                        l(t);
                    })
                    .catch(function (e) {
                      return N("Network error. Try again later.");
                    });
                })();
              }, []),
              Object(p.jsxs)("div", {
                className: "history",
                children: [
                  Object(p.jsxs)("div", {
                    className: "history__title",
                    children: [
                      Object(p.jsx)(E.a, {
                        className: "history__icon",
                        style: { fontSize: 100 },
                      }),
                      Object(p.jsx)("h3", {
                        className: "history__text",
                        children: "HISTORY",
                      }),
                    ],
                  }),
                  Object(p.jsx)("p", {
                    className: "history__instructions",
                    children: "Select a date to view a past routine.",
                  }),
                  Object(p.jsxs)("p", {
                    className: "history__instructions-2",
                    children: [
                      "Dates in ",
                      Object(p.jsx)("span", { children: "green" }),
                      " have exercise data",
                    ],
                  }),
                  Object(p.jsx)("div", {
                    className: "history__calendar",
                    children: Object(p.jsx)(K.a, {
                      onChange: function (e, t) {
                        k ||
                          (y(!0),
                          fetch(
                            "/api/routine-data/data/"
                              .concat(d, "/")
                              .concat(C(e))
                          )
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              m(e);
                            })
                            .catch(function (e) {
                              return N("Network error. Try again later.");
                            }),
                          y(!1));
                      },
                      value: n,
                      tileClassName: function (e) {
                        var t = e.date;
                        e.view;
                        if (o)
                          return o.find(function (e) {
                            return e === C(t);
                          })
                            ? "bg-green"
                            : void 0;
                      },
                    }),
                  }),
                  v
                    ? Object(p.jsx)("p", {
                        className: "history__error",
                        children: v,
                      })
                    : null,
                  Object(p.jsx)("div", {
                    className: "history__routine",
                    children:
                      O &&
                      O.map(function (e, t, r) {
                        var s = r[t - 1];
                        r[t + 1];
                        return s && s.name === e.name
                          ? Object(p.jsx)(
                              "p",
                              {
                                className: "history__routine__set",
                                children: ""
                                  .concat(e.weight, " x ")
                                  .concat(e.reps),
                              },
                              t
                            )
                          : Object(p.jsxs)(
                              c.a.Fragment,
                              {
                                children: [
                                  Object(p.jsx)("p", {
                                    className: "history__routine__exercise",
                                    children: e.name,
                                  }),
                                  Object(p.jsx)("p", {
                                    className: "history__routine__set",
                                    children: ""
                                      .concat(e.weight, " x ")
                                      .concat(e.reps),
                                  }),
                                ],
                              },
                              t
                            );
                      }),
                  }),
                ],
              })
            );
          }),
        V = (r(104), r(74)),
        X = function (e) {
          var t = Object(s.useState)(),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(),
            i = Object(u.a)(a, 2),
            o = (i[0], i[1]);
          return (
            Object(s.useEffect)(
              function () {
                !(function () {
                  var t = e.exercise.user_id,
                    r = e.exercise.exercise_id,
                    s = [],
                    c = [];
                  n(null),
                    o(null),
                    fetch("/api/progress/".concat(t, "/").concat(r))
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        e.map(function (e) {
                          var t = new Date(e.date_end),
                            r =
                              t.getMonth() +
                              1 +
                              "-" +
                              t.getDate() +
                              "-" +
                              t.getFullYear();
                          c.push(r), s.push(e.max);
                        }),
                          n({
                            labels: c,
                            datasets: [
                              {
                                label: "weight",
                                data: s,
                                backgroundColor: "#27e77f",
                                borderColor: "#27e77f",
                                borderWidth: 2,
                                fill: !1,
                              },
                            ],
                          });
                      })
                      .catch(function (e) {
                        return console.error(e);
                      });
                })();
              },
              [e.exercise]
            ),
            Object(p.jsx)("div", {
              className: "graph",
              children:
                c &&
                Object(p.jsx)(V.Line, {
                  data: c,
                  options: {
                    title: {
                      display: !0,
                      text: "".concat(e.exercise.name.toUpperCase()),
                      fontSize: 20,
                    },
                    responsive: !0,
                    maintainAspectRatio: !1,
                    showLine: !0,
                  },
                }),
            })
          );
        },
        Z = function (e) {
          var t = Object(s.useState)(),
            r = Object(u.a)(t, 2),
            c = r[0],
            n = r[1],
            a = Object(s.useState)(!1),
            i = Object(u.a)(a, 2),
            _ = i[0],
            j = i[1],
            d = Object(s.useState)(),
            b = Object(u.a)(d, 2),
            h = b[0],
            x = b[1],
            O = Object(s.useState)(),
            m = Object(u.a)(O, 2),
            f = m[0],
            g = m[1];
          return (
            Object(s.useEffect)(
              Object(l.a)(
                o.a.mark(function e() {
                  var t, r, s, c;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t = JSON.parse(localStorage.getItem("user")))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (r = t.userId),
                              (e.prev = 4),
                              (e.next = 7),
                              fetch("/api/max/".concat(r))
                            );
                          case 7:
                            return (s = e.sent), (e.next = 10), s.json();
                          case 10:
                            (c = e.sent), n(c), (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              g("Network error. Try again later.");
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              ),
              []
            ),
            Object(p.jsxs)("div", {
              className: "progress",
              children: [
                Object(p.jsxs)("div", {
                  className: "progress__title",
                  children: [
                    Object(p.jsx)(T.a, { style: { fontSize: 100 } }),
                    Object(p.jsx)("h3", {
                      className: "progress__text",
                      children: "PROGRESS",
                    }),
                  ],
                }),
                !h &&
                  Object(p.jsx)("div", {
                    className: "progress__instructions",
                    children:
                      "Select an exercise to view a graph of your progress",
                  }),
                h && Object(p.jsx)(X, { exercise: h }),
                f
                  ? Object(p.jsx)("p", {
                      className: "progress__error",
                      children: f,
                    })
                  : null,
                Object(p.jsxs)("div", {
                  onClick: function () {
                    return j(!0);
                  },
                  className: "progress__select__exercise",
                  children: [
                    Object(p.jsx)("p", {
                      className: "progress__select__exercise--text",
                      children: "select exercise",
                    }),
                    Object(p.jsx)(F.a, {
                      className: "progress__select__icon",
                      style: { fontSize: 30 },
                    }),
                  ],
                }),
                c &&
                  _ &&
                  Object(p.jsxs)("div", {
                    className: "progress__exercise__container",
                    children: [
                      Object(p.jsx)("div", {
                        className: "progress__exercise__cancel",
                        children: Object(p.jsx)("span", {
                          onClick: function () {
                            return j(!1);
                          },
                          children: "cancel",
                        }),
                      }),
                      Object(p.jsx)("div", {
                        className: "progress__exercise__list",
                        children:
                          c && c.length
                            ? c.map(function (e) {
                                return Object(p.jsx)(
                                  "p",
                                  {
                                    onClick: function () {
                                      x(e), j(!1);
                                    },
                                    className: "progress__exercise",
                                    children: e.name,
                                  },
                                  e.exercise_id
                                );
                              })
                            : Object(p.jsx)("p", {
                                className: "progress__error",
                                children:
                                  "No exercise data found. Complete a workout to view progress.",
                              }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        $ =
          (r(200),
          function (e) {
            var t = Object(s.useState)(),
              r = Object(u.a)(t, 2),
              c = r[0],
              n = r[1],
              a = Object(s.useState)(),
              i = Object(u.a)(a, 2),
              _ = i[0],
              j = i[1];
            return (
              Object(s.useEffect)(
                Object(l.a)(
                  o.a.mark(function e() {
                    var t, r, s, c;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t = JSON.parse(localStorage.getItem("user")))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (r = t.userId),
                                (e.prev = 4),
                                (e.next = 7),
                                fetch("/api/max/".concat(r))
                              );
                            case 7:
                              return (s = e.sent), (e.next = 10), s.json();
                            case 10:
                              (c = e.sent), n(c), (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(4)),
                                j("Network error. Try again later.");
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 14]]
                    );
                  })
                ),
                []
              ),
              Object(p.jsxs)("div", {
                className: "records",
                children: [
                  Object(p.jsxs)("div", {
                    className: "records__title",
                    children: [
                      Object(p.jsx)(L.a, {
                        className: "records__icon",
                        style: { fontSize: 100 },
                      }),
                      Object(p.jsx)("h3", {
                        className: "records__text",
                        children: "RECORDS",
                      }),
                    ],
                  }),
                  Object(p.jsx)("div", {
                    className: "records__instructions",
                    children: Object(p.jsx)("p", {
                      className: "records__instructions--1",
                      children:
                        "Each row is the heaviest weight lifted for the given exercise",
                    }),
                  }),
                  Object(p.jsxs)("div", {
                    className: "records__data",
                    children: [
                      _
                        ? Object(p.jsx)("p", {
                            className: "records__error",
                            children: _,
                          })
                        : null,
                      Object(p.jsxs)("div", {
                        className: "records__data__label",
                        children: [
                          Object(p.jsx)("p", {
                            className: "records__data__label--exercise",
                            children: "Exercise",
                          }),
                          Object(p.jsx)("p", {
                            className: "records__data__label--weight",
                            children: "Weight",
                          }),
                        ],
                      }),
                      c && c.length
                        ? c.map(function (e) {
                            return Object(p.jsxs)(
                              "div",
                              {
                                className: "records__data__row",
                                children: [
                                  Object(p.jsx)("p", {
                                    className: "records__data__row--exercise",
                                    children: e.name,
                                  }),
                                  Object(p.jsx)("p", {
                                    className: "records__data__row--weight",
                                    children: e.max_weight,
                                  }),
                                ],
                              },
                              e.exercise_id
                            );
                          })
                        : Object(p.jsx)("p", {
                            className: "records__message",
                            children: "No exercise data available",
                          }),
                    ],
                  }),
                ],
              })
            );
          }),
        ee = r(26),
        te = r(76),
        re = function (e) {
          var t = e.component,
            r = Object(te.a)(e, ["component"]);
          return !!JSON.parse(localStorage.getItem("user"))
            ? Object(p.jsx)(
                j.b,
                Object(ee.a)(
                  Object(ee.a)({}, r),
                  {},
                  {
                    render: function (e) {
                      return Object(p.jsx)(
                        t,
                        Object(ee.a)(Object(ee.a)({}, r), e)
                      );
                    },
                  }
                )
              )
            : Object(p.jsx)(j.a, { to: "/login" });
        },
        se = function () {
          return Object(p.jsxs)("h1", {
            className: "title",
            children: [
              Object(p.jsx)("span", {
                className: "title__text title__text--1",
                children: "Stay Fi",
              }),
              Object(p.jsx)("span", {
                className: "title__text title__text--2",
                children: "T",
              }),
            ],
          });
        },
        ce =
          (r(201),
          function (e) {
            return Object(p.jsx)("div", {
              className: "homelogout",
              children: e.token
                ? Object(p.jsxs)(p.Fragment, {
                    children: [
                      Object(p.jsx)(w, { text: "home" }),
                      Object(p.jsx)(w, { text: "logout", logout: e.logout }),
                      " ",
                    ],
                  })
                : null,
            });
          }),
        ne = function () {
          var e = Object(s.useState)(),
            t = Object(u.a)(e, 2),
            r = t[0],
            n = t[1],
            a = Object(s.useState)(),
            i = Object(u.a)(a, 2),
            d = i[0],
            b = i[1],
            h = Object(s.useState)(!1),
            x = Object(u.a)(h, 2),
            O = x[0],
            m = x[1];
          Object(s.useEffect)(function () {
            var e = JSON.parse(localStorage.getItem("user"));
            e && n(e.token);
          }, []);
          var g = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t, r) {
                  var s, c, a;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t && r) || b("Please enter email and password"),
                              m(!0),
                              (s = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ email: t, password: r }),
                              }),
                              (e.prev = 3),
                              (e.next = 6),
                              fetch("/api/authenticate", s)
                            );
                          case 6:
                            return (c = e.sent), (e.next = 9), c.json();
                          case 9:
                            if (((a = e.sent), c.ok)) {
                              e.next = 12;
                              break;
                            }
                            throw new Error(a);
                          case 12:
                            n(a.token),
                              localStorage.setItem(
                                "user",
                                JSON.stringify({
                                  userId: a.userId,
                                  token: a.token,
                                })
                              ),
                              b(null),
                              (e.next = 22);
                            break;
                          case 17:
                            return (
                              (e.prev = 17),
                              (e.t0 = e.catch(3)),
                              b(e.t0.message || "Something went wrong"),
                              m(!1),
                              e.abrupt("return", !1)
                            );
                          case 22:
                            return m(!1), e.abrupt("return", !0);
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 17]]
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            v = function () {
              n(null), b(null), localStorage.removeItem("user");
            };
          return Object(p.jsx)(c.a.Fragment, {
            children: Object(p.jsxs)(_.a, {
              children: [
                Object(p.jsx)(ce, { logout: v, token: r }),
                Object(p.jsx)(se, {}),
                Object(p.jsxs)(j.d, {
                  children: [
                    Object(p.jsx)(j.b, {
                      path: "/login",
                      render: function () {
                        return Object(p.jsx)(f, {
                          error: d,
                          loading: O,
                          login: g,
                        });
                      },
                    }),
                    Object(p.jsx)(j.b, { path: "/signup", component: N }),
                    Object(p.jsx)(re, {
                      path: "/workout",
                      logout: v,
                      component: H,
                    }),
                    Object(p.jsx)(re, {
                      path: "/history",
                      logout: v,
                      component: Q,
                    }),
                    Object(p.jsx)(re, {
                      path: "/progress",
                      logout: v,
                      component: Z,
                    }),
                    Object(p.jsx)(re, {
                      path: "/records",
                      logout: v,
                      component: $,
                    }),
                    Object(p.jsx)(re, {
                      path: "/",
                      exact: !0,
                      logout: v,
                      component: z,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      r(202);
      a.a.render(
        Object(p.jsx)(c.a.StrictMode, { children: Object(p.jsx)(ne, {}) }),
        document.getElementById("root")
      );
    },
    83: function (e, t, r) {},
    84: function (e, t, r) {},
    94: function (e, t, r) {},
    95: function (e, t, r) {},
    96: function (e, t, r) {},
    97: function (e, t, r) {},
    98: function (e, t, r) {},
    99: function (e, t, r) {},
  },
  [[204, 1, 2]],
]);
//# sourceMappingURL=main.ed484012.chunk.js.map

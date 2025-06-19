"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    if (isAuthenticated) {
      router.replace("/dashboard");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await fetch(`${baseUrl}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        if (!res.ok) {
          toast.error(data.error || "Login failed");
          return;
        }

        localStorage.setItem("auth", "true");
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        router.push("/dashboard");
      } catch {
        toast.error("Network error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (isChecking) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#2B0A3D] via-[#2E1651] to-[#221F4A]">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-xl rounded-xl p-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-4 shadow-md">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.66 0 3-1.34 3-3S13.66 5 12 5 9 6.34 9 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"
              />
            </svg>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 text-black py-2 border border-[#4f39f6] rounded-lg bg-white bg-opacity-20 placeholder-white  focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-300 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border border-[#4f39f6] rounded-lg bg-white bg-opacity-20 placeholder-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {formik.isSubmitting ? "Logging in..." : "LOGIN"}
          </button>
        </form>
        <div className="text-center text-white text-xs mt-4">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

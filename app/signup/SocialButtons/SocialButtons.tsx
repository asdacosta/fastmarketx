import React from "react";
import styles from "./SocialButtons.module.css";
import { signIn } from "next-auth/react";

function SocialButtons({ content }: { content: string }) {
  return (
    <section className={styles.socialButtons}>
      <section
        className={styles.socialBtn}
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <svg viewBox="0 0 488 512" role="img">
          <path
            fill="#EA4335"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          />
        </svg>
        <span>{content} with Google</span>
      </section>
      <section
        className={styles.socialBtn}
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
      >
        <svg viewBox="0 0 320 512" role="img">
          <path
            fill="#1877F2"
            d="M279.14 288l14.22-92.66h-88.91V129.24c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C141.09 0 89.09 54.42 89.09 154.09V195.3H0v92.66h89.09V512h107.83V288z"
          />
        </svg>
        <span>{content} with Facebook</span>
      </section>
      <section
        className={styles.socialBtn}
        onClick={() => signIn("twitter", { callbackUrl: "/" })}
      >
        <svg viewBox="0 0 512 512" role="img">
          <path
            fill="#000000"
            d="M512 32L339.9 243.2 509.2 480H419.3L308.7 319.6 183.1 480H0L181.4 257.1 12.5 32h94.2l102.5 144.5L324.7 32z"
          />
        </svg>
        <span>{content} with X</span>
      </section>
    </section>
  );
}

export default SocialButtons;

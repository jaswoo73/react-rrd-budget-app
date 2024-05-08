import { Form, useFetcher } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";
import spinner from "../assets/spinner.svg";

const Intro = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <fetcher.Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          {/* To specify the action when the form is submitted */}
          <input type="hidden" name="_action" value="newUser" />
          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span>Creating Account...</span>
                <img
                  src={spinner}
                  width={32}
                  style={{ display: "flex", alignItems: "center" }}
                  alt="Loading spinner"
                />
              </>
            ) : (
              <>
                <span>Create Account</span>
                <UserPlusIcon width={20} />
              </>
            )}
          </button>
        </fetcher.Form>
      </div>
      <img src={illustration} alt="Person with Money" />
    </div>
  );
};

export default Intro;

import Header from "@/components/Header";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div
        className="flex flex-col 
      items-center justify-center py-2
      mt-20 px-14 text-center dark:bg-black dark:text-white"
      >
        <p className="font-greatVibes text-8xl"> Creativegram </p>
        <div className="mt-4">
          {Object.values(providers).map((provider) => (
            <div key={providers.name}>
              <button
                className="font-montserrat p-3 bg-blue-500 text-white rounded-full"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//Server Side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;

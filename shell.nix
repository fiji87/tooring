with (import <nixpkgs> {});
let
  env = bundlerEnv {
    name = "tooring-bundler-env";
    inherit ruby;
    gemfile  = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset   = ./gemset.nix;
  };
in stdenv.mkDerivation {
  name = "tooring";
  buildInputs = [ env ];
}

let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-25.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
  gems = pkgs.bundlerEnv {
  	name = "jekyllgems";
	gemdir = ./.;
  };
in
pkgs.mkShellNoCC {
  packages = with pkgs; [
    jekyll
    # jekyll package management
    bundler
    bundix
    # actual gems
    gems.wrappedRuby
    dart
  ];
}

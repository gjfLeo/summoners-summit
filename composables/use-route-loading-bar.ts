export default function useRouteLoadingBar() {
  const loadingBar = useLoadingBar();
  const { beforeEach, afterEach } = useRouter();
  beforeEach(() => loadingBar.start());
  afterEach(() => loadingBar.finish());
}

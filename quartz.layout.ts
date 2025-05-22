import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { ContentDetails } from "./quartz/plugins/emitters/contentIndex"
import type { FileTrieNode } from "./quartz/util/fileTrie"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/edvein-rin/development-knowledge-base",
    },
  }),
}

const filterFilesThatNamedAfterTheirParentFolder = (node: FileTrieNode<ContentDetails>) => {
  if (node.isFolder || node.data === null) return true

  const nodeFilePath = node.data.filePath
  const nodeFilePaths = nodeFilePath.split("/")
  if (nodeFilePaths.length < 2) return true

  const parentFolderName = nodeFilePaths.at(-2)
  const fileName = nodeFilePaths.at(-1)
  if (!fileName || !parentFolderName) return true

  const fileNameWithoutExtension = fileName.replace(".md", "")
  if (parentFolderName === fileNameWithoutExtension) return false

  return true
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      filterFn: filterFilesThatNamedAfterTheirParentFolder,
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
        enableRadial: false,
        centerForce: 0.48,
        repelForce: 0.1,
        fontSize: 0.3,
      },
      globalGraph: {
        showTags: false,
        enableRadial: false,
        centerForce: 0.48,
        repelForce: 0.1,
        fontSize: 0.3,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}

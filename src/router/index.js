import VueRouter from "vue-router"
import config from "../store/modules/config.js"

import PageIndex from "pages/PageIndex"
import PageAbout from "pages/PageAbout"
import PageAssets from "pages/PageAssets"
import PageCommunity from "pages/PageCommunity"
import PageEvents from "pages/PageEvents"
import PagePrivacy from "pages/PagePrivacy"
import PageRoadmap from "pages/PageRoadmap"
import PageTestnet from "pages/PageTestnet"
import PageValidators from "pages/PageValidators"

import PageIntro from "pages/PageIntro"
import PageIntroIndex from "pages/PageIntroIndex"
import PageIntroHub from "pages/PageIntroHub"
import PageIntroFurther from "pages/PageIntroFurther"

import PageDevelopers from "pages/PageDevelopers"
import PageDevelopersIndex from "pages/PageDevelopersIndex"
import PageDevelopersHackAtom from "pages/PageDevelopersHackAtom"
import PageDevelopersScalingEth from "pages/PageDevelopersScalingEth"
import PageDevelopersWallet from "pages/PageDevelopersWallet"
import PageDevelopersAcademy from "pages/PageDevelopersAcademy"

import PageResources from "pages/PageResources"
import PageResourcesIndex from "pages/PageResourcesIndex"
import PageResourcesFaq from "pages/PageResourcesFaq"
import PageResourcesDelegators from "pages/PageResourcesDelegators"
import PageResourcesPlan from "pages/PageResourcesPlan"
import PageResourcesValidators from "pages/PageResourcesValidators"
import PageResourcesWhitepaper from "pages/PageResourcesWhitepaper"

import PageVoyager from "pages/PageVoyager"
import PageVoyagerIndex from "pages/PageVoyagerIndex"
import PageVoyagerFaq from "pages/PageVoyagerFaq"
import PageVoyagerSupport from "pages/PageVoyagerSupport"

import Page404 from "pages/Page404"

const routes = [
  // PAGES
  { path: "/", name: "index", component: PageIndex },
  { path: "/about", name: "about", component: PageAbout },
  { path: "/assets", name: "assets", component: PageAssets },
  { path: "/community", name: "community", component: PageCommunity },
  { path: "/events", name: "events", component: PageEvents },
  { path: "/privacy", name: "privacy", component: PagePrivacy },
  { path: "/roadmap", name: "roadmap", component: PageRoadmap },
  { path: "/testnet", name: "testnet", component: PageTestnet },
  { path: "/validators", name: "validators", component: PageValidators },

  // INTRO
  {
    path: "/intro",
    component: PageIntro,
    children: [
      { path: "/", name: "intro", component: PageIntroIndex },
      { path: "hub", name: "intro-hub", component: PageIntroHub },
      {
        path: "further",
        name: "intro-further",
        component: PageIntroFurther
      }
    ]
  },

  // DEVELOPERS
  {
    path: "/developers",
    component: PageDevelopers,
    children: [
      { path: "/", name: "developers", component: PageDevelopersIndex },
      { path: "academy", name: "academy", component: PageDevelopersAcademy },
      {
        path: "hackatom",
        name: "hackatom",
        component: PageDevelopersHackAtom
      },
      {
        path: "scaling-eth",
        name: "scaling-eth",
        component: PageDevelopersScalingEth
      },
      { path: "wallet", name: "wallet", component: PageDevelopersWallet }
    ]
  },

  // RESOURCES
  {
    path: "/resources",
    component: PageResources,
    children: [
      { path: "/", name: "resources", component: PageResourcesIndex },
      {
        path: "whitepaper",
        name: "whitepaper",
        component: PageResourcesWhitepaper
      },
      {
        path: "/whitepaper/:locale",
        name: "whitepaper-i18n",
        component: PageResourcesWhitepaper
      },
      {
        path: "faq",
        name: "faq",
        component: PageResourcesFaq
      },
      {
        path: "plan",
        name: "plan",
        component: PageResourcesPlan
      },
      {
        path: "delegators",
        name: "delegators",
        component: PageResourcesDelegators
      },
      {
        path: "validators-faq",
        name: "validators-faq",
        component: PageResourcesValidators
      }
    ]
  },

  // VOYAGER
  {
    path: "/voyager",
    component: PageVoyager,
    children: [
      { path: "/", name: "voyager", component: PageVoyagerIndex },
      { path: "faq", name: "voyager-faq", component: PageVoyagerFaq },
      {
        path: "support",
        name: "voyager-support",
        component: PageVoyagerSupport
      }
    ]
  },

  // redirects
  { path: "/about/faq", redirect: "/resources/faq" },
  { path: "/about/team", redirect: "/about" },
  { path: "/about/whitepaper", redirect: "/resources/whitepaper" },
  { path: "/academy", redirect: "/developers/academy" },
  { path: "/blog/:entry", redirect: "/blog" },
  {
    path: "/blog",
    beforeEnter: () => {
      window.location.assign("https://blog.cosmos.network")
    }
  },
  {
    path: "/contact-events",
    beforeEnter: () => {
      window.location.assign(config.state.CONTACT_EVENTS_URL)
    }
  },
  { path: "/download", redirect: "/voyager" },
  { path: "/downloads", redirect: "/voyager" },
  { path: "/dev", redirect: "/developers" },
  { path: "/dev/hackatom", redirect: "/developers/hackatom" },
  { path: "/dev/whitepaper", redirect: "/resources/whitepaper" },
  { path: "/developers/scaling", redirect: "/developers/scaling-eth" },
  { path: "/faq", redirect: "/resources/faq" },
  { path: "/hackatom", redirect: "/developers/hackatom" },
  { path: "/intro/faq", redirect: "/resource/faq" },
  { path: "/introduction", redirect: "/intro" },
  {
    path: "/matrix",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/plan", redirect: "/resources/plan" },
  { path: "/plan/:locale", redirect: "/resources/plan" },
  {
    path: "/riot",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/scaling-eth", redirect: "/developers/scaling-eth" },
  { path: "/scalingeth", redirect: "/developers/scaling-eth" },
  { path: "/scaling", redirect: "/developers/scaling-eth" },
  {
    path: "/security",
    beforeEnter: () => {
      window.location.assign("https://tendermint.com/security")
    }
  },
  { path: "/staking", redirect: "/intro/hub" },
  { path: "/staking/validators", redirect: "/validators" },
  { path: "/staking/validators-faq", redirect: "/resources/validators-faq" },
  { path: "/staking/delegators", redirect: "/resources/delegators" },
  { path: "/team", redirect: "/about" },
  {
    path: "/telegram",
    beforeEnter: () => {
      window.location.assign("https://t.me/cosmosproject")
    }
  },
  { path: "/ui", redirect: "/voyager" },
  { path: "/validator", redirect: "/staking/validators" },
  { path: "/validators/faq", redirect: "/resources/validators-faq" },
  { path: "/whitepaper/en-US", redirect: "/resources/whitepaper" },
  { path: "/whitepaper", redirect: "/resources/whitepaper" },
  { path: "/wallet", redirect: "/developers/wallet" },

  // wildcards
  { path: "/404", component: Page404 },
  { path: "*", component: Page404 }
]

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 48 + 3 }
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

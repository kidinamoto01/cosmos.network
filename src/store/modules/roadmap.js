// import nodes from '../json/roadmapNodes.json'
import getJson from 'scripts/getJson'
let url = 'https://api.github.com/repos/tendermint/aib-data/contents/json/roadmap.json'

const state = {
  // nodes: nodes
  nodes: []
}

const mutations = {
  async initializeRoadmap (state) {
    state.nodes = await getJson(url)
  }
}

export default { state, mutations }

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Define the structure of a project
interface Project {
  id: string
  title: string
  description: string
  techs: string
  imageUrl: string
  link: string
}

// Sample project data
const projects: Project[] = [
  {
    id: "1",
    title: "FlowPass",
    description: "Projeto de Gerência de Presenças de Eventos.",
    techs: "React, Tailwind, Express, MySql",
    imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_Hm4-zr78TVGEnhEU-DAP0bYbUysfCzKbz9Xg-BA6BsSEK53lhmMt0tdFzWZTsII_943i4LMqO2SB2Jh-m2NOAz17xCAT8nTgxPIsracRb6FB6fWu7PA54PUAB4vd8yrUz16Qlw1WTKaIQhPiOZhkXXAfINqWg1fNJoxPoZI5jt4Ct9ff88B6g2Alsj_GbwRESF3Y5beYfuoZ5BPgcdQsJcD1q6bVqNLU7XvUYx2-woOWBx6ICDWsbdXNrbf10ruitDMP704u5E-ZEoDgUvKSFci3lesmP2Av9LA4z_AasH335EsvXCTPm3UPK7vpq2K9QuuPwwQ_X3FWXNR1CYrvLMky9z_nvpAOcnR-DMlqrQjGpk9zqJR5rQSSmiV4ahLrih06HA5bi8rY0DErxKhZs4q4VQnN8EfuauZJ7MFHyb6TbAJoQ1DcsBW-6HYiJgyUIJae8meCos9D6CEdwXRNivOTTxTwsyJ_0I-BAmUm3gMH2xAaJvVxlebCs60H5BhLimzQfANHsAoP85x1JOlbfuUvOoV5Jq1BY4QpIfepg25Mnnge1dp_okwTcUYs8Ly0Gaz8Z03qhfnWieQd_WyRegsamQ9yh8Ic4Xuu4s4rlpplV2FNFKhIysW5FicDzsYNy30pRRLY0bBeLnx_SICighJ2QNTN8xpRzwXEINA87YDiIm58MXDERZDy85sDG6qHw7FKYd0ytLNTi7qQ__EYU55vSoOt87AkWRI2SUy9zVzL7HhL11VeD4PhdjSLlwvpHMWzQZC0xaVhqGRG6y8D0HB5oPWZp8S_DU-RwLmiWDEL32FORcM4BYdWyiSpbin3S1RQUmmJ-6_FCAwvLzDNEOrWIPj4G5QbKa6kwGQdCZhBm1R8omzft3QsXHbNZMOJ26f6hSjo1SU5Z-XJ2tPDOVz8jEO8cAW2TezyHFRMN3loveAtrp5vg6em1PIqb2bliOCaABTaPbST6RSvHcO8P17O-i-9oqjd_oZzT2g3EKtZlJvmQBckPnRbKu-GRc0rVcMxDTeCc7MmJHFGLheF4KjSgoWHSUQ5TnyrrZ9QWUPMDtz8aWW3CKjgQmKgY9H6_3nb6Nw27gYaTjWGBw2fGhfuwkWnih6eqKa3F-nuqgu3zxduqRi1zu9cZBhmmx6jTcujioBYZ7zHgm8ikqCACigi5ggW_OrQRiDAsBL5KjVURniQ9fJEpguBC2z-Hckci5YYhVkeBRm9WNyw8tkRfMLH_HwNHFTAkuo_Q77p1tGzNc-yHLGaHgjjnUd57IfUnWxSRSiUilA1kiJITIvTkgAnssAeOZBkkw9oU5h4k2oPWdUqDv8rZm8i_74BQ6CtwOVS1mMQRM88gsJ8xUlwmGPUGu0EIFBayxKbZ1BJuoLct64P1pW3CdlIZcef1wVSK34Evll4YdrKjdh0ugVeJg9NL3ki-o_yJ4EtGfFaOWvH_eIr14YxEfkSFKyzbNqus6mScYVI2LmTYOdmT6n-zLlBPUWAgdSMnSW52wifOHbnQFqqyVrEks0qgcxRL-tqVJn4w6iaJ1jt4Eff6lvFp5O-yvO8U1ldeRJ4CdSNWDSMeZcbmLPU5n4U1rEuypcKh7orHBVD7Rw0OmyPYVjXr-YcWfiI6IhtuTzESwzzLPfYUKTllh0b9D71E2EYSkIoSgmrz_HV8NGm3dr3ts9g=w1102-h922",
    link: "https://projeto-1-client.vercel.app/",
  },
  {
    id: "2",
    title: "Recadastramento do Servidor",
    description: "Sistema de Manutenção de Servidores Públicos",
    techs: "Php, CodeIgniter, Bootstrap",
    imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H_yz7hUQ3u5l6w3mVKLPJmHZcqbzWfPhp89EcQWYCeVOTYy7SPQVCoIbMSSglFaIpBYC164B-5MxcPUrb4UQs5Nlxv0r8DsWaYxAqVOQygl9RTn3xQL2up1Exe1IUVTuHnt792ct9hobZJJkxaf0LJ6anr-8PSZV93NctTqjQGEEXNFmwZwIlL3B25iJJ9YRxu6TBeRv27QhySCLaugCUP60mabfwU5iaBCEvzEJx6IpTeg03KP_1mqoWnOhXrLKEZub-wZM01CVFkicFNxRmFSZkrl94Ae9rWjHhf6JhR0sowDZcl2lz1hJQJi1FXMmrWRvq7njV1-qOEvgFduRpLrui0nCeRgcOaL_8B2CKFNSA8-UwLu_udR7s6UGb1PnfJD1z6a-71uEClDcAsnUTDDmfkZ4aWofBoOxACFXqSJwDSjfIJPZUUGmW7xxVPN0TEyeibeUsK097kHnC_472s9zv82dKRs-s2PdqyK6j7aBIc_uaCFrJPkIixjYpEZSalGPO4JgsTL7N3FEkKNOBjg-Lypdl6LMqxoa57gYQsqJkoFNakVyDubcdpsUYmPgS1d0oZfedFdH9yHERqrZsp2HlIjwXE9apTRkpkFN-qZWrda1zpQKh6e0CnUu-NiSnjjXlt-hfNQu7NHXp9SrWw_E1ayKoIOod0D6dWVw4MolDnNLnmprub46-iIOQO0nteDETA_TFWcotEBx_BDLM9bOcFFciZVk7RGF3TLjuVcM-YexBkRlevgn5HLgwm7tmER5uLf3KY5d7kMY5YxZ586Ut2YlPvTXa8i2bkGWv-oS8avXR8H_Xsn6EKr78D0FMoGSUjeqYSykd4NScWGNAr2SAuiZ_QIa9c3WNdj6ilxssMSJaItlsJ8ufSZGziKabOsc6DhEQkrJ19saJsB9mPO8HPSn-r8SLAiC-QCMfhL6J35ge-UjP5g9yt5dKvfzfvSUvbb9-ieFmX1zU3TTaRXWrqYyYAamm8p6CgGeHGeZeLt-d5sBK3cEALsft6RRdKZLY8mQ_OpLRex07JC3HEr5XD67-2qwJZOTEeN2_CWJ1zgWQTdewTsiRM4IXcYJqpWGPs3yJ4v6tBDw6miwh86wQryqqgfTsYySwoUfdVum3F9R-m0df1dhdrTHRkiNKlAM5KTrPLhUhxavyPbrL2mKwsFKKpg5N7RZTl_XSf8rd_pGsZh3sSLf7S6X9I7vp2Hr3-xbESQDsCTiWzFWhzIs1_97OatByzxJQRuCFcEObfsa_qWdHZHTUVZy1i2S7sgw4pLQ70FIoVbCPvHqLqe0fsDkwk3nMZS6SwXh_oLa0q2BeBntNG5FZA0ztuiRxJ9gDJkbURydjmPX1GtOoGuCixF9Hl6CW3fwtGgG7Mcb1rWjwo2fNAqwKBQ--tgZtkHvfCJrA7l96Os1trztkCo1L5o93ZG3EsODACYMnyx5rWejGctSlD5aArKg5xGPesAX9Tt4FVzUjjeikaEcoBadA5xVFcU46vhybLneifYpABgdRqcggwOT_mUihFXKqGPPVyZvITVkBqLPFyoTFXyLzkKfbJjfEggcU70QSPHISDPW26o0jDhu9gSGSSLs5KqID13ESqF1zDYA24mvvi5jOn51W7vEFJFUhRa4qbiI3Vx1koYyaF2kMH-YPdHpe6wlLwfSjsGhOuxiBljA=w1102-h902",
    link: "https://sistema.saogoncalodoamarante.ce.gov.br/cadastroservidor/public/",
  },
  {
    id: "3",
    title: "Projeto Gestalt",
    description: "Projeto de Apresentação Criativa do Tema",
    techs: "p5js",
    imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H5Aqw_1MRbYVuLJyX9njfnSbUE2R9eu8tNxrmbXhf4ruQfHXatH25FKZlsdppFN6EuvstNhFurTITFRb7v068N1drVyFHxaAjthmerBnip1to4IczTLLQAho4upAoyjcfkWG5sAq4CSIwyK0a0EczW8j6AS5vkOqdTJK6H5SqnF0_t3IB-CdEgkURqngFstfEOFEPGJY7s6uwSCu7T504gBxFrgHb4WiVHTEuTbQiaFROlA7KFqXTmEnAeB5pZoNToYtQlWzO_XBR1AITEkK5WuRqiPWNkkVQu_F9MmHTuNNC5xbdxWjNdL_GDGoDM3-gzLB-UtceBMQxCS0ghW8XAwt-aqgicIgeTN3RfALwJp31NJnd7VI6ngeEHghkPEhhQf2gG5W4rR-bQ0IZxmIHsaY38s2odjLatL3SKbmgOym0G54lM_2oGDOo0b_PHxHinnb35Pgp1mu6ncTZNx-oBmJXRLqT4qAiiOERdetJ4H5klB0F76QwaEF6P6kPTqUzKQBV3kCgVh6lP9IMp-l7tair3W8bIwhC8g2IjNy5KQgR8VFpLeRAE8e5w3hwUGLurwiodrky9OKZjZFZQAOfcJzeyaKCJcrwzvbFoKwdsyPKHJUATgU8w_6_d_pHBt9Ra-lxykFFMTslI7iI9g7oneux_rSz_EGUXJz_eLZzMypfJTRqENBfL0vm4zgJaxpuJX3EaGQtFOabPnt6-vXKP773CNNCdl6s9_FgjS0dZ5ohCTnm3-u6yGffZU8M-0oAPSZKrcRYNQ8zKM3fwFilFikEpLOYgG7j6DzuJuz1He_NzG6CsV-NYbDKkZbjmZ_mTo34_hCLp6Omqk-dLRVqJWmoVhVLq7xS4Xw1Im8fzVtNmk4oaOp35bRarrQvHvdSmPZH3iT5E8k7GEEgWvWJZ4ColR5WT4fWRgk0JDKu4m_6FgK7Y_goy8HrYsB8k9hFZCNg2Ya1hHG3qfgWH4dnJ9j0AdJ_JJNR8W_gLfviXwsles75LEWG-d6oRT_ZSACh5KO81KMLk-K8dDuwIZ1bSGNT7NJJ66lcyO83EtIg8DXuyhUbBXT4IKwhERP4QqVgCf_R0qBe1sownRxWjEjXe8lja8kh2w-P9jZEzzLUmIuvIEWXH3_3_UqPqq37s3X31bITNP00q-JIZgzrxHQ9W_NS-Zrrfwk8lyzXvZngGXecxPpzT1VZt8vlmbzlKi_9SUwwNYIw4JH7j3l86Vf2jjrMaJhq30eBMToe288NWM6hR0o4KTs-b-qkPKuRzyeVZEHWc1pmz9RVjvPjawXURdY1L3CuikwRphR5LyRxmP3YRAP7SGHZgB2Lw_uTPiDP1OQmUOKXeJBvBfXcAGQPqcPxlQNvnHy2Tyu7X7fCqgb-e4osO0_s_ILcZAY4bM8EKfZKWtKR3oSqDLOkKRklGPiLK44zQ2LN74z_-5sQVeD6SmxTjSLHTKvpUt2qB9FZr--8Ob-JepupopBLEJctUSErlE7ZqPZOFwXy0iFhgjfTeDKFCVG8O6IKDcuWWf-upFimgP_0HTC1PDn35VG-zavxpW5PZB0Ny8fphBJiej-6gdUYj7XnMIjyxIvhZxqI_kIxoFakIVJpajVfGj92mpWIAwrZU0oDc_1I6f4urzWveajDAy9JLfNoZUOl_RRDj3oL490oikGwTLw4OMQ=w1920-h922",
    link: "https://gestalt-project.vercel.app/",
  },
  {
    id: "4",
    title: "Gerênciamento de Ramais",
    description: "Sistema de pesquisa e manutenção de Ramais.",
    techs: "Php, CodeIgniter, Bootstrap",
    imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H4SRs_Zr8v9DXXVO-a-3yJXcbT6nStQJTdgu_oaLP2L-8yRmPiyQhoqGGE9kM3qtAwrtmDDatinGbLoFi2_AihlXPr-REutZTx2lvNzrRZApsWYi6SAk_YX7WIek_6gIdEWEK9O5_dUNineddeAZ9hxCs_zDYZxXtgLG8rtHqQqGPcLUM75zmPpZBEM7mvhuc0dEwGN6l-Nylzfvl-8VmkJCWTTlJ0Y4f19t2xy4a6DF68Jf8ItJwGLCsLm1j5veZr7pUaniJngfOCFzAvDTCIqArHNP6bcXItaLjBQ2HWLLfMf58gSiLos0hNrTn_cUqWdad2COqKOffXwf3y4hnMMKOUCYyMjVZTokHg2YEFYX2jwBwvKH_7JlSQohXDzEgNU4iIh6nOiAtHI63-TQ3UKPWEf3CzHruVsO8dMYOS1eVovAPBTXs8_r4Gr3wFrZahvTV5_ud2iPg74hCzfcQJOAWNqUBwTOnetPuxMifFWfBVTlqdABJjQzUXYDFbqztECNXpPcfAElldT-51yFh2p7PFLgeIf-V3UvQOkZqTqY5H8vYZ5osSQu7kh9e5bhf2z2n9jelOqZ2MUUTaY1wxAEVyUYL4X-MN95LnlUL1MSuK7T2U_r30soDTP9sEXTr_PiS2PPriEMIb5HYraz7lR2eOfSidK_Udqx3MaQXDFhido-O1g3TOdh9gqUlelQyvzv1rSrqmddsE9XDLU-BypnqaY7AgKOVabPJaJtAgPCOE0ij_P9MUDjZnrDdVhNAQIY_DCNzXHfYo1OwjT7_ElQwX69loYf5DFtcTwc8m5cxXiZSn2NWMKxkZmARJ23uYXpMd5XGhtGsdc-GBgeR98yq80EHZWOrJMyhsx2fefqxfft18seUsTwqPPkj-PVT-Df6mtD-yzFCPe3cAV1qdBTGx_rJyhwfgEUdKR7yHQfl10VzyzLLcYh_vK3DdEVh-y-76ViYH4-cxL7EuvbwW4aQa-JHjlAi_LB6TLzdeLdsS0pKT_rnztu7zcwWxOHN4lrUPBXi8BZyR2JrbvIRXYb1-hDpfII4t9m1a5XGRvrdhEnp6ItLq6fL2ya1lyH0xkvBfjBBmu-dPaIu8DY3xnfX2_m6kS3jA-pBf3umstwDvG3a46aQhoB0IMEX0BkeYzjmN5AWDIB7jwGLJqlfJ9yOiZlvN-DpYFitz_69AXCXPiF1tvtc_n3bUr4wxxC2KQ_UQd_mse7KvwDtcJOc8mOAYAEuZhYhXEg3ZWB_4yNCM3pqPWYNpVfOAKgd9mBg0dZljf62jNZ1xO6P9WiprvKptpCsgBcFcxyKH3nv9hkIYxN228NBZBiq6ZsGiTeR9O-Otxmt2xEcpD7vjJV_9Pg5sExNzphbz6WWNEsqu_n_nsxdHuq6gx4fqsRy2ZRQLolup3XSvIwyZeZbAezuaPLac2ifecOPaRceHEx5jZpZOAZNlVxhR0hXO8ht3EG34Yi7JnzWmNsAvWEXemNuS9vQlVKDzVFGuVglNHUlceHYGYul8dr2Rii-Og8zMQV28sEAXev9BAh2tpDHeMIw69i2-srrqmwApRCxeJaGL3p9VCKsAlIO5HPONJvJdbH6iDSpcIuC9Il9hQeJrEOJ3bdOHJGeDL30SGSTztr7vnWa_52X1lYjAd5b5xKHGUdXOgEo62gD3bDyu8DSb=w1102-h922",
    link: "https://sistema.pmsga.ce.gov.br/ramaispmsga/public/",
  },
  {
    id: "5",
    title: "Bartolomeu o Cachorro Farejador",
    description: "Vencedor da Jam - The Guardian Jam",
    techs: "GameMaker",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMjAyMTAwNS8xMTg4ODYzMy5wbmc=/original/e%2BghV0.png",
    link: "https://itch.io/jam/the-guardian-jam/rate/2021005",
  },
  {
    id: "6",
    title: "ChatBot Ai - API DeepSeek",
    description: "ChatBot construído via API SDK - DeepSeek R1",
    techs: "Nextjs, shadcn-ui, Tailwind",
    imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_GKHeVel9KZ1PivG-kiT1czrzzVMvA7JF5gYVfm4s318YJKz43u36eRnnyvZwsxsEmAFhKljpCm7dKci5gFq-wTir1NCsPoteS7xNmwZaYcT_Rzj_Y4nEsVDlcorr_evArAGzbPMYHDHuCuOB_1e9YxnM2pKLNtqcdGRAu9SqJKezegqpjMdwGgB_EInfB1qEPQrsVuCFmntlE6BcGKLUHfpe6hD3TSqbljuilMXAZHj0xktHBusAb-M4EDTTZzlud0ErrBsLUIrrJ966N2fSZAJ9OfBnwK7sjzjmMPybfJacMnhJulC6iVCnvfk0WNzUVyF0JMTEx7kNoOxXhbx0G8RGNfcztWCy00WifMPqVTLVOC6EulhvkCpPX-fU3egY3cgB3YDoGNlspGzJinFOcUeLqcbHIf43BQsgGhycMVptsOZ0mG_ibupXt8FKz1A9YHphdTx3a1GK7qnu0KiHnvVJEJFpaqCUFsojhLnwn2z4E_UjEqVYAjylevyMOYdbDbzdnAiXrdOtQwLO3Bw4B29eKcRNU13GdTdhUZMurwDfzPe4m1CHZoO7jebRgUiNwGHjIHfa3nVooRkxgOKZ8281V1M8QqSNLD_DCBJY231kmdELP4tCJb7kVQzbc1MiJg6FOA2TloN0JmilPOvhA6WrcoT4ao3u7atlCL_OytUDlxyuaLVe40sqY8UsE2RFObEhbYRilxXndzscLSs-wtuST9gIvgGBJ4M-icAEhjSWpX2eMnkMNhGeLpW99PRNmJZr-jfWNSxRawAkSjJbk88CLG_WT1JDsH13FIRCQEfRmEdFhPm2rvFAhikNcGhAEqF1UVktZu4XDSzkteNdwJg5KVoZ3xeuaeara3ZSooSsX0W2KGOatYfJ6RJwQ-ho_FJamFPD3zpy97rsRJfmAILu8rSL3J1ght11mTempFEQoAomUF1uBdmZtlvrl-be1nMa5-jaN7Dw0m0nUNKiDkP_bA2UOnQZ2MRXJhQRwnENf9udSQO6GLiQBAr4JA-dxkaVfgbkg7g056hCmluT8MDmCPIbh5NLfCq2WAlgYt_SEiTzDFfncofd1l-VsxzLfAzKLN3fKtVTZbRQQv3fqYF0cewf4K2u8MtXQ_0ZWI-L82RkzDDSwYopQiEoPil6cTdzjjkvclX1fqw8Wn03S8cS11f_IN41d7e2CPFDfYsFi2hBJKYPB3EB8lLbw54euDSo-au69c87ThdGNOp86A8NUW-8SpRdVFCubOVJ4HSVLc6jc9Gw4pr67MjnfN-DPBi_7w_SQUS5IMGZG-wdMcoe0_jF3oxpYx4V2qPpsB6Jv2HDMKf9yakXM9_u6SAD3IAhGkHlq1Ruiq3_LJ6QrCCU99yn9Iyqz3k62gCyDd1sqJ0jcZJLaUnPN6rwr3pSnw02q9priun0R0ouuM1d307ELYoX5AjgA-c5pWf2IXiI0ryFgIDRDNsQRJPOulB5qAryw9sU3xQ46qDDA76wrs_QIow3wK48B-9uQX9xM8nquVnjka6mLeiOpgRH8tl2P78vZ3UAv1tyLRoyv3OaFnoLqO8hLIDq0cBiOaK0JKLwmFPt9aSIAgaX9W9GbKBSEPEhk_0UChI3ZMZvodGvZ3aMaTEPlFkyANOMNoXcSjoGOLp7FL4gFPtJuW00Vhfdm3LGUzL_b63iRNbzPu0A=w1920-h922",
    link: "https://chatbot-deepseek.vercel.app/",
  },
]
export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-cyan-900 dark:to-emerald-900"></div>

      {/* Projects */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Alguns Projetos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={project.link} className="block">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                >
                  <div className="relative h-60">
                    <Image
                      src={project.imageUrl || ""}
                      alt={project.title}
                      fill
                      className="bject-fill"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white group-hover:text-sky-600 ">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    <i className="text-gray-600 dark:text-gray-300">{project.techs}</i>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


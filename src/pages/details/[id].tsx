import React, { FC, useState } from 'react'
import { Skeleton, Typography, Row, Col, Space, Divider, Button, Avatar, PageHeader } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const IconText = ({ icon, text, rotate }) => {
    return !rotate
        ? (<span>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </span>)
        : (<span>
            {React.createElement(icon, { style: { marginRight: 8 }, rotate })}
            {text}
        </span>)
};

const Detail: FC = ({ history }) => {
    const [skeletonActive, setSkeletonActive] = useState(true);

    const { location } = history;
    const { pathname } = location;
    const params = ~~pathname.split('/')[2]; // 获取当前文章id type:Number

    let timer = setTimeout(() => {
        setSkeletonActive(false);
    }, 2000);

    return (
        <div className="container">
            {
                skeletonActive && <Skeleton
                    active={skeletonActive}
                    paragraph={{ rows: 20 }}
                />
            }

            {
                !skeletonActive && <ContentDetail />
            }
        </div>
    )
};


const ContentDetail = () => {
    const HTMLCONTENT = `<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p><b>手里有多少牌，就上什么样的牌桌。</b></p><p><b>如果你是穷人的话，千万不要强行套用“富人思维”，因为你根本支撑不起。</b></p><p class="ztext-empty-paragraph"><br></p><p>什么是“富人思维”？</p><p>会有很多营销号告诉你，富人会花钱买时间，富人会借力。</p><p>如果你一穷二白，你花钱买时间，让别人替你做事，空出的时间干什么？再买个课程提升下自我？</p><p>double kill。</p><figure data-size="normal"><noscript><img src="https://pic4.zhimg.com/50/v2-97476681fa4290543ea3c3de8e75a4c4_hd.jpg" data-caption="" data-size="normal" data-rawwidth="720" data-rawheight="357" data-default-watermark-src="https://pic4.zhimg.com/50/v2-73d91c0fa0f14a337a434a9c9b2bdcd7_hd.jpg" class="origin_image zh-lightbox-thumb" width="720" data-original="https://pic4.zhimg.com/v2-97476681fa4290543ea3c3de8e75a4c4_r.jpg"/></noscript><img src="https://pic4.zhimg.com/80/v2-97476681fa4290543ea3c3de8e75a4c4_1440w.jpg" data-caption="" data-size="normal" data-rawwidth="720" data-rawheight="357" data-default-watermark-src="https://pic4.zhimg.com/50/v2-73d91c0fa0f14a337a434a9c9b2bdcd7_hd.jpg" class="origin_image zh-lightbox-thumb lazy" width="720" data-original="https://pic4.zhimg.com/v2-97476681fa4290543ea3c3de8e75a4c4_r.jpg" data-actualsrc="https://pic4.zhimg.com/50/v2-97476681fa4290543ea3c3de8e75a4c4_hd.jpg" data-lazy-status="ok"></figure><p>富人花钱买时间，其实是很简单的计算：<b>如果做这件事的机会成本高于付钱请人去做，那他就买时间。</b></p><p>穷人之所以自己做，是因为机会成本太低了，不值得外包出去。</p><p>所以“花钱买时间”之类的建议，提出者都是有自己的小算盘的，听建议前，看看对方屁股所在，很重要。</p><p>我认为如果真的存在“富人思维”这种东西的话，应该是“<b>风险投资的思维</b>”。</p><p>有个朋友结婚了，亲朋好友从五湖四海来参加他的婚宴。</p><p>我们作为朋友，尽尽力，帮忙筹备下婚礼，开车接下人，差不多就这样了。</p><p>但他的另外一个朋友，婚礼前特意从外地赶来，自掏腰包在饭店开了一个包间，提前一天到来的新郎亲友，他一一接待，陪着吃个饭，聊聊天，互换下联系方式，然后送走。</p><p>那天他接待了二三十个人，因为航班有早有晚，坚持到了后半夜。</p><p>他是做生意的，自然了解人脉的重要。这次接待，既是帮助新郎，也是自己顺便结识下新朋友。</p><p>说白了，二三十个人的餐费，高了也不过数万，可能对我们大多数人而言，都掏得起这个钱。</p><p>但我们会掏吗？</p><p>——大部分人不会。因为如果把请吃饭，看做是人脉投资的话，那么这笔投资回报的不确定性太大了。大家都是从各地赶来参加婚礼，结束后又分散各地，本来也不是你的朋友，也许这辈子就一面之缘。至于为了一面之缘的人掏饭钱吗？你又不是主角。</p><p>但他无所谓。</p><p>对于他，这样的人脉投资，也是风险投资的一种，本来就不指望能有确定的回报。</p><p>但只要，<b>这二三十人中，能有一个，跟他谈得来，还能建立无论是商业上，还是金融资源、政府关系方面的合作，他就赚回来了。</b></p><p>赚不回来也没关系，无非花了点小钱，跟人吃吃喝喝罢了。</p><p>这种“风险投资”的思维，穷人没法有。</p><p>因为风险投资投的项目和人，大概率是要失败的，<b>成功是小概率事件</b>。</p><p><b>小概率事件的发生，要靠大数定律。</b></p><p>大数定律是说，只要数量规模足够大了，你就一定能碰上成功的案例。我们可以认为，他花了几十万，请了数千人吃饭，必定能建立起一个有效的强关系。</p><p>一旦成功，回报也是非常可观的，收益可能覆盖大多数的失败投资。</p><p><b>但穷人没有雄厚的资本，所以玩儿不了大数定律。非要玩，可能你还没等来成功案例的回报，就已经饿死了。</b></p><p><b>富人通过玩儿“大数定律”，可以布局未来。</b>即使自己赖以发家的行业已经式微，通过投资新兴行业，能保证自己财富的量级。</p><p>因为“大数定律”，富人以他的财富量级做投资，几乎一定是能取得可观收益的。</p><p><b>而穷人，因为到不了“大数定律”发挥效果的财富量级，所以他们想取得爆发式增长，就是靠投机、靠赌。</b></p><p>十赌九输啊，你懂得。</p><p><b>这就是资本量级的变化，造成了财富规律的变化。对于富人是确定性的东西，对于穷人，是赌博。</b></p><figure data-size="normal"><noscript><img src="https://pic1.zhimg.com/50/v2-f224300ef88e5cae879eaac76c646b20_hd.jpg" data-size="normal" data-rawwidth="600" data-rawheight="272" data-default-watermark-src="https://pic4.zhimg.com/50/v2-90cbb93753581e35d604492c0838b6a7_hd.jpg" class="origin_image zh-lightbox-thumb" width="600" data-original="https://pic1.zhimg.com/v2-f224300ef88e5cae879eaac76c646b20_r.jpg"/></noscript><img src="https://pic1.zhimg.com/80/v2-f224300ef88e5cae879eaac76c646b20_1440w.jpg" data-size="normal" data-rawwidth="600" data-rawheight="272" data-default-watermark-src="https://pic4.zhimg.com/50/v2-90cbb93753581e35d604492c0838b6a7_hd.jpg" class="origin_image zh-lightbox-thumb lazy" width="600" data-original="https://pic1.zhimg.com/v2-f224300ef88e5cae879eaac76c646b20_r.jpg" data-actualsrc="https://pic1.zhimg.com/50/v2-f224300ef88e5cae879eaac76c646b20_hd.jpg" data-lazy-status="ok"><figcaption>引用一张图，侵删</figcaption></figure><p class="ztext-empty-paragraph"><br></p><p>如果说有“穷人思维”这种东西，那么我想应该就是“<b>稀缺心态</b>”了。</p><p>美国学者穆来纳森在《稀缺：我们是如何陷入贫穷与忙碌的》里分析，<b>因为稀缺，我们会短视，会产生只关注当前的“管窥之见”，会陷入债务的泥潭。</b></p><p><b>但“管窥”，也就是集中当下所有的资源去处理当前的事，是符合穷人的理性选择的。</b></p><p>因为不集中所有资源，他就过不了这个坎。</p><p>穷人没有广阔的视野，有了也没有充沛的资源去尝试，去布局，去为下一个世代做准备。他光是活着，就已经拼尽全力了。</p><p>所以从“稀缺心态”，过渡到“风投思维”，需要有真正经济状况的改变。光是主观上的改变认知，没有用。</p><p><b>以穷人的身份，如果还拥有“富人思维”，简直是加速灭亡。</b></p><p class="ztext-empty-paragraph"><br></p><p>穷人应该怎么做呢？</p><p><b>先慢慢解决稀缺。</b></p><p>对自己狠一点，攒点钱，先打破管窥和短视的链条，让自己在面临决策的时候，有一些腾挪的空间，选择的自由。</p><p><b>学习基础的经济学知识，知道在选择和决策的时候，用机会成本、投入产出等简单但有效的概念做理性分析。</b></p><p>这样一步步，就能越来越好。</p><p>能不能好到用上概率论和大数定律呢，就看造化了。</p></span></div>`;

    return (
        <>
            <div className="mg-b10"></div>
            <div style={{ padding: "20px 200px", backgroundColor: "#fff" }}>
                    <Row className="mg-b20" justify="center" align="center">
                        <Title level={3}>如何从「穷人思维」过渡到「富人思维」？</Title>
                    </Row>
                    <Row>
                        <div dangerouslySetInnerHTML={{ __html: HTMLCONTENT }}></div>
                    </Row>

                <Row justify="left">
                    <Space size="middle">
                        <IconText
                            icon={LikeOutlined}
                            text="156"
                            key="list-vertical-like-o"
                        />
                        <IconText
                            rotate={180}
                            icon={LikeOutlined}
                            text="17"
                            key="list-vertical-message"
                        />
                    </Space>
                </Row>

                <Divider />

                <Row className="mg-b10" justify="center">
                    "随意赞赏，权当鼓励！"
                </Row>
                <Row className="mg-b10" justify="center">
                    <Button shape="primary" type="warning">赞赏支持</Button>
                </Row>
                <Row className="mg-b10" justify="center" align="middle">
                    <Space>
                        <Col>
                            <Space>
                                <Avatar size="small" style={{ backgroundColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`, verticalAlign: 'middle' }} >
                                    YIN
                        </Avatar>
                                <Avatar size="small" style={{ backgroundColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`, verticalAlign: 'middle' }} >
                                    KiKi
                        </Avatar>
                                <Avatar size="small" style={{ backgroundColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`, verticalAlign: 'middle' }} >
                                    PP
                        </Avatar>
                            </Space>

                        </Col>
                        <Col>等3人赞赏</Col>
                    </Space>
                </Row>
            </div>

        </>
    )
};


export default Detail;
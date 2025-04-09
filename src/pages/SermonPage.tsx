import { useState } from "react";
import image10 from "../assets/10.png";
import camera from "../assets/camera.svg";
import Audio from "../assets/audio.svg";
import pdf from "../assets/pdf.svg";
import jump from "../assets/jump.svg";
import thirdimg from "../assets/third.svg";
import { NavLink } from "react-router-dom";
import Header from "@/components/Header";
import logo from "../assets/logo.svg";
const image2 = "https://i.imgur.com/K38ANvA.png";

import image4 from "../assets/cuts.svg";
import image5 from "../assets/image 11.png";
import Footer from "@/components/footer";

// Define the type for a sermon
interface Sermon {
  image: string;
  title: string;
  date: string;
  author: string;
  content: string;
  link: string;
  voice: string;
}

const sermonsData: Sermon[] = [
  {
    image: image10,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content:
     `Faith is more than just words—it’s movement. It’s not enough to say, "I believe in God," if our lives don’t reflect that belief. True faith is alive, active, and visible. James challenges us: "Show me your faith without deeds, and I will show you my faith by my deeds." (James 2:18). Today, we’ll explore what it means to put faith into action—because faith without works is dead.

1. Faith That Moves Beyond Words (James 2:14-17)
The Problem of Passive Faith

Many say, "I have faith," but their lives show no evidence of it.

Like a car with no engine—it looks good but goes nowhere.

James warns: If you see a brother or sister in need but say, "Go in peace, be warmed and filled," yet do nothing—what good is that? (v. 16).

True Faith Responds

Abraham didn’t just believe God—he left his homeland (Hebrews 11:8).

The Good Samaritan didn’t just feel bad—he bandaged wounds and paid for care (Luke 10:33-35).

Application: Where is God calling you to act? A struggling friend? A ministry opportunity? Don’t just pray—do something!

2. Faith That Risks (Hebrews 11:6, Joshua 3:13-16)
Stepping Into the Unknown

The Israelites had to step into the Jordan River before God parted the waters (Joshua 3:15).

Faith means obeying even when the outcome isn’t clear.

Modern-Day Examples

Starting a business, forgiving an enemy, sharing the Gospel—all require risk.

Quote: "Faith is taking the first step even when you don’t see the whole staircase." (Martin Luther King Jr.)

3. Faith That Persists (Galatians 6:9, Hebrews 12:1-2)
The Danger of Quitting

Some plant seeds but walk away before the harvest (Ecclesiastes 11:4).

Jesus didn’t stop at Gethsemane—He finished His mission (John 19:30).

Keep Going!

Maybe you’ve prayed for years for a prodigal child, a breakthrough, or healing.

Promise: "Let us not grow weary in doing good, for at the proper time we will reap a harvest if we do not give up." (Galatians 6:9).

Conclusion: Your Faith Alive Today

Challenge: Identify one area where God is calling you to act.

Serve (volunteer, encourage someone).

Give (time, resources, forgiveness).

Speak (share your testimony, invite someone to church).

Altar Call: "Faith by itself, if it is not accompanied by action, is dead." (James 2:17). Let’s pray for courage to live out loud for Christ!

Closing Prayer:
"Lord, ignite our faith into action. Help us not just to hear Your Word but to live it. Give us boldness to step out, persistence to keep going, and love that moves us to serve. In Jesus’ name, Amen."`,
    link: "https://www.youtube.com/@rccgstrongtowerstouffville3164",
    voice: "https://www.youtube.com",
  },
  {
    image: jump,
    title: "Transforming Live, Restoring Hope",
    date: "August 8, 2025",
    author: "Admin",
    content:
      `We live in a broken world—pain, disappointment, and despair are everywhere. But Jesus came to transform lives and restore hope. No situation is too damaged, no heart too wounded, no future too bleak for God’s power. Today, we’ll see how God’s love changes us from the inside out and brings light into our darkest places.

1. The Power to Transform (2 Corinthians 5:17, Ezekiel 36:26)
a) A New Creation in Christ
"If anyone is in Christ, the new creation has come: The old has gone, the new is here!" (2 Cor. 5:17).

God doesn’t just "fix" us—He completely renews us.

Example: The Samaritan woman (John 4)—from shame to evangelism.

b) A Heart Transplant
"I will give you a new heart and put a new spirit in you." (Ezekiel 36:26).

God removes our stony, sinful hearts and replaces them with hearts of love, purpose, and hope.

Application:

Are you holding onto old habits, guilt, or identity?

Surrender to God’s transforming power today!

2. The Process of Transformation (Romans 12:2, Philippians 1:6)
a) Renewing the Mind
"Be transformed by the renewing of your mind." (Romans 12:2).

Change starts with how we think. Replace lies with God’s truth.

b) God’s Faithfulness in the Process
"He who began a good work in you will carry it on to completion." (Philippians 1:6).

Transformation isn’t instant—it’s a journey. But God never gives up on us.

Illustration:

A caterpillar doesn’t become a butterfly overnight—it goes through struggle before beauty emerges.

3. Restoring Hope (Jeremiah 29:11, Psalm 34:18)
a) God’s Plans for Your Future
"For I know the plans I have for you…plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11).

No matter your past, God has a purpose for you.

b) Hope in Brokenness
"The Lord is close to the brokenhearted and saves those who are crushed in spirit." (Psalm 34:18).

Testimony: Joseph (Genesis 50:20)—what was meant for evil, God used for good.

Application:

Are you feeling hopeless? God is writing a redemption story in your life.

Conclusion: Your Transformation, Someone Else’s Hope
Your changed life is a testimony that gives others hope.

Challenge:

Let God transform you (repent, renew your mind, trust His process).

Be a hope-bearer (share your story, encourage others).

Altar Call:
"Lord, transform me today. Break every chain, heal every wound, and fill me with unstoppable hope. Use my life to show others Your power!"

Closing Prayer:
"Father, we surrender to Your transforming work. Restore what’s broken, revive what’s dead, and let our lives declare Your hope to the world. In Jesus’ name, Amen!"`,
    link: "https://www.youtube.com/@rccgstrongtowerstouffville3164",
    voice: "https://soundcloud.com/",

  },
  {
    image: thirdimg,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content: `Faith is more than just words—it’s movement. It’s not enough to say, "I believe in God," if our lives don’t reflect that belief. True faith is alive, active, and visible. James challenges us: "Show me your faith without deeds, and I will show you my faith by my deeds." (James 2:18). Today, we’ll explore what it means to put faith into action—because faith without works is dead.

1. Faith That Moves Beyond Words (James 2:14-17)
The Problem of Passive Faith

Many say, "I have faith," but their lives show no evidence of it.

Like a car with no engine—it looks good but goes nowhere.

James warns: If you see a brother or sister in need but say, "Go in peace, be warmed and filled," yet do nothing—what good is that? (v. 16).

True Faith Responds

Abraham didn’t just believe God—he left his homeland (Hebrews 11:8).

The Good Samaritan didn’t just feel bad—he bandaged wounds and paid for care (Luke 10:33-35).

Application: Where is God calling you to act? A struggling friend? A ministry opportunity? Don’t just pray—do something!

2. Faith That Risks (Hebrews 11:6, Joshua 3:13-16)
Stepping Into the Unknown

The Israelites had to step into the Jordan River before God parted the waters (Joshua 3:15).

Faith means obeying even when the outcome isn’t clear.

Modern-Day Examples

Starting a business, forgiving an enemy, sharing the Gospel—all require risk.

Quote: "Faith is taking the first step even when you don’t see the whole staircase." (Martin Luther King Jr.)

3. Faith That Persists (Galatians 6:9, Hebrews 12:1-2)
The Danger of Quitting

Some plant seeds but walk away before the harvest (Ecclesiastes 11:4).

Jesus didn’t stop at Gethsemane—He finished His mission (John 19:30).

Keep Going!

Maybe you’ve prayed for years for a prodigal child, a breakthrough, or healing.

Promise: "Let us not grow weary in doing good, for at the proper time we will reap a harvest if we do not give up." (Galatians 6:9).

Conclusion: Your Faith Alive Today

Challenge: Identify one area where God is calling you to act.

Serve (volunteer, encourage someone).

Give (time, resources, forgiveness).

Speak (share your testimony, invite someone to church).

Altar Call: "Faith by itself, if it is not accompanied by action, is dead." (James 2:17). Let’s pray for courage to live out loud for Christ!

Closing Prayer:
"Lord, ignite our faith into action. Help us not just to hear Your Word but to live it. Give us boldness to step out, persistence to keep going, and love that moves us to serve. In Jesus’ name, Amen."`,
    link: "https://www.youtube.com/@rccgstrongtowerstouffville3164",

    voice: "https://soundcloud.com/",
  },
  {
    image: image4,
    title: "Transforming Live, Restoring Hope",
    date: "August 8, 2025",
    author: "Admin",
    content:
      `We live in a broken world—pain, disappointment, and despair are everywhere. But Jesus came to transform lives and restore hope. No situation is too damaged, no heart too wounded, no future too bleak for God’s power. Today, we’ll see how God’s love changes us from the inside out and brings light into our darkest places.

1. The Power to Transform (2 Corinthians 5:17, Ezekiel 36:26)
a) A New Creation in Christ
"If anyone is in Christ, the new creation has come: The old has gone, the new is here!" (2 Cor. 5:17).

God doesn’t just "fix" us—He completely renews us.

Example: The Samaritan woman (John 4)—from shame to evangelism.

b) A Heart Transplant
"I will give you a new heart and put a new spirit in you." (Ezekiel 36:26).

God removes our stony, sinful hearts and replaces them with hearts of love, purpose, and hope.

Application:

Are you holding onto old habits, guilt, or identity?

Surrender to God’s transforming power today!

2. The Process of Transformation (Romans 12:2, Philippians 1:6)
a) Renewing the Mind
"Be transformed by the renewing of your mind." (Romans 12:2).

Change starts with how we think. Replace lies with God’s truth.

b) God’s Faithfulness in the Process
"He who began a good work in you will carry it on to completion." (Philippians 1:6).

Transformation isn’t instant—it’s a journey. But God never gives up on us.

Illustration:

A caterpillar doesn’t become a butterfly overnight—it goes through struggle before beauty emerges.

3. Restoring Hope (Jeremiah 29:11, Psalm 34:18)
a) God’s Plans for Your Future
"For I know the plans I have for you…plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11).

No matter your past, God has a purpose for you.

b) Hope in Brokenness
"The Lord is close to the brokenhearted and saves those who are crushed in spirit." (Psalm 34:18).

Testimony: Joseph (Genesis 50:20)—what was meant for evil, God used for good.

Application:

Are you feeling hopeless? God is writing a redemption story in your life.

Conclusion: Your Transformation, Someone Else’s Hope
Your changed life is a testimony that gives others hope.

Challenge:

Let God transform you (repent, renew your mind, trust His process).

Be a hope-bearer (share your story, encourage others).

Altar Call:
"Lord, transform me today. Break every chain, heal every wound, and fill me with unstoppable hope. Use my life to show others Your power!"

Closing Prayer:
"Father, we surrender to Your transforming work. Restore what’s broken, revive what’s dead, and let our lives declare Your hope to the world. In Jesus name,Amen!"`,
    link: "https://www.youtube.com/@rccgstrongtowerstouffville3164",

    voice: "https://soundcloud.com/",

  },
  {
    image: image5,
    title: "Put Your Faith Into Action",
    date: "August 8, 2025",
    author: "Admin",
    content:
     `We live in a broken world—pain, disappointment, and despair are everywhere. But Jesus came to transform lives and restore hope. No situation is too damaged, no heart too wounded, no future too bleak for God’s power. Today, we’ll see how God’s love changes us from the inside out and brings light into our darkest places.

1. The Power to Transform (2 Corinthians 5:17, Ezekiel 36:26)
a) A New Creation in Christ
"If anyone is in Christ, the new creation has come: The old has gone, the new is here!" (2 Cor. 5:17).

God doesn’t just "fix" us—He completely renews us.

Example: The Samaritan woman (John 4)—from shame to evangelism.

b) A Heart Transplant
"I will give you a new heart and put a new spirit in you." (Ezekiel 36:26).

God removes our stony, sinful hearts and replaces them with hearts of love, purpose, and hope.

Application:

Are you holding onto old habits, guilt, or identity?

Surrender to God’s transforming power today!

2. The Process of Transformation (Romans 12:2, Philippians 1:6)
a) Renewing the Mind
"Be transformed by the renewing of your mind." (Romans 12:2).

Change starts with how we think. Replace lies with God’s truth.

b) God’s Faithfulness in the Process
"He who began a good work in you will carry it on to completion." (Philippians 1:6).

Transformation isn’t instant—it’s a journey. But God never gives up on us.

Illustration:

A caterpillar doesn’t become a butterfly overnight—it goes through struggle before beauty emerges.

3. Restoring Hope (Jeremiah 29:11, Psalm 34:18)
a) God’s Plans for Your Future
"For I know the plans I have for you…plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11).

No matter your past, God has a purpose for you.

b) Hope in Brokenness
"The Lord is close to the brokenhearted and saves those who are crushed in spirit." (Psalm 34:18).

Testimony: Joseph (Genesis 50:20)—what was meant for evil, God used for good.

Application:

Are you feeling hopeless? God is writing a redemption story in your life.

Conclusion: Your Transformation, Someone Else’s Hope
Your changed life is a testimony that gives others hope.

Challenge:

Let God transform you (repent, renew your mind, trust His process).

Be a hope-bearer (share your story, encourage others).

Altar Call:
"Lord, transform me today. Break every chain, heal every wound, and fill me with unstoppable hope. Use my life to show others Your power!"

Closing Prayer:
"Father, we surrender to Your transforming work. Restore what’s broken, revive what’s dead, and let our lives declare Your hope to the world. In Jesus’name,Amen!"`,
    link: "https://www.youtube.com/@rccgstrongtowerstouffville3164",

    voice: "https://soundcloud.com/",

  },
];

interface SermonItemProps {
  sermon: Sermon;
  onClick: () => void;
  print: () => void;
}

const SermonItem = ({ sermon, onClick, print }: SermonItemProps) => (
  <div className='flex justify-between w-full cursor-pointer' onClick={onClick}>
    <div className='flex gap-4'>
      <img
        src={sermon.image}
        alt=''
        className='w-[69px] h-[63px] md:w-[211px] md:h-[143px]'
      />
      <div className='flex flex-col justify-center gap-2'>
        <p className='text-sm md:text-2xl hover:underline'>{sermon.title}</p>
        <p className='text-sm text-gray-600'>
          By <span className='text-orange-400'>{sermon.author}</span>,{" "}
          {sermon.date}
        </p>
      </div>
    </div>
    <div className='flex items-center  '>
      <a href={sermon.link} target='_blank' rel='noopener noreferrer'>
        <div className=' flex  text-sm text-white h-fit p-4 bg-[#FF7F00]'>
          <img src={camera} alt='' className='w-4 h-4 mt-1' />
        </div>
      </a>
      <a href={sermon.voice} target='_blank' rel='noopener noreferrer'>
        <div className=' flex  text-sm text-white h-fit p-4 bg-[#FF7F00]'>
          <img src={Audio} alt='' className='w-4 h-4 mt-1' />
        </div>
      </a>
      <div
        className=' flex  text-sm text-white h-fit p-4 bg-[#FF7F00] cursor-pointer'
        onClick={print}
      >
        <img src={pdf} alt='' className='w-4 h-4 mt-1' />
      </div>
    </div>
  </div>
);

const SermonPage = () => {
  const [openSermon, setOpenSermon] = useState<number | null>(null);
  const [selectedSermonTitle, setSelectedSermonTitle] = useState<string | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrintView, setIsPrintView] = useState(false);

  const handleSermonClick = (index: number) => {
    setSelectedSermonTitle(sermonsData[index].title);
    setOpenSermon(index === openSermon ? null : index);
  };

  const handlePrintPage = () => {
    setIsPrintView(true);

    // Use setTimeout to ensure the state change has been applied before printing
    setTimeout(() => {
      window.print();
      setIsPrintView(false);
    }, 300);
  };

  // Create print-friendly styles that will only apply when printing
  const printStyles = `
    @media print {
      body {
        font-family: Arial, sans-serif;
        color: black;
        background: white;
      }
      
      .no-print {
        display: none !important;
      }
      
      .print-only {
        display: block !important;
      }
      
      .print-container {
        padding: 20px;
        max-width: 100%;
      }
      
      .print-header {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
      }
      
      .print-content {
        font-size: 14px;
        line-height: 1.5;
      }
      
      .print-metadata {
        color: #666;
        font-style: italic;
        margin: 10px 0 20px;
      }
      
      .print-image {
        max-width: 80%;
        margin: 20px auto;
        display: block;
      }
    }
  `;

  return (
    <section>
      {/* Add print styles in a style tag */}
      <style>{printStyles}</style>

      {/* Print View - only shown when printing */}
      {isPrintView && openSermon !== null && (
        <div className='hidden print-only print-container'>
          <div className='print-header'>{sermonsData[openSermon].title}</div>
          <div className='print-metadata'>
            By {sermonsData[openSermon].author}, {sermonsData[openSermon].date}
          </div>
          <img
            src={sermonsData[openSermon].image}
            alt={sermonsData[openSermon].title}
            className='print-image w-[1000px]'
          />
          <div className='print-content'>{sermonsData[openSermon].content}</div>
          <div className='print-footer'>
            <p>RCCG Strong Tower Stouffville - Sermon PDF</p>
          </div>
        </div>
      )}

      {/* Normal View */}
      <div
        className={`flex flex-col ${isPrintView ? "no-print" : ""}`}
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image",
        }}
      >
        <Header />

        <div className='flex items-center justify-between p-4 w-full'>
        <NavLink to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-24 md:w-33" />
            </div>
            </NavLink>

          <div className='hidden md:flex gap-4 text-white text-sm capitalize cursor-pointer'>
            {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
              (link) => (
                <NavLink
                  key={link}
                  to={`/${link === "home" ? "" : link.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-1 ${isActive ? "underline" : "hover:underline"}`
                  }
                >
                  {link}
                </NavLink>
              )
            )}
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-white text-3xl'
            >
              ☰
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 min-h-screen'>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='absolute top-4 right-4 text-white text-2xl focus:outline-none'
              aria-label='Close menu'
            >
              ×
            </button>

            <nav className='flex flex-col items-center gap-3 w-full max-w-xs px-4'>
              {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
                (link) => (
                  <NavLink
                    key={link}
                    to={`/${link === "home" ? "" : link.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-white text-lg py-2 w-full text-center border-b border-white/20 cursor-pointer capitalize transition-all duration-200 ${
                        isActive ? "font-bold" : "hover:bg-white/10"
                      }`
                    }
                  >
                    {link}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        )}
        <div>
          <div className='flex flex-col gap-4 justify-center items-center p-6'>
            <hr className='w-full h-0,5 text-white opacity-50' />
            <h1 className='text-xl md:text-4xl capitalize text-white'>
              {" "}
              {selectedSermonTitle || "Our Sermons"}{" "}
            </h1>
            <hr className='w-full h-0,5 text-white opacity-50' />
          </div>
        </div>
      </div>

      {openSermon === null ? (
        <div
          className={`flex flex-col items-center justify-center gap-5 p-13 ${
            isPrintView ? "no-print" : ""
          }`}
        >
          <div className='flex gap-3 items-center'>
            <div className='w-28 bg-gray-400 h-0.5'></div>
            <p className='text-gray-700 text-sm'>Latest Sermons</p>
            <div className='w-28 bg-gray-400 h-0.5'></div>
          </div>

          {sermonsData.map((sermon, index) => (
            <SermonItem
              key={index}
              sermon={sermon}
              onClick={() => handleSermonClick(index)}
              print={() => handlePrintPage()}
            />
          ))}
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center gap-5 p-13 mb-22 ${
            isPrintView ? "no-print" : ""
          }`}
        >
          <div className='flex flex-col md:flex-row gap-3'>
            <img
              src={sermonsData[openSermon].image}
              alt='sermon'
              className='w-[290px] md:w-[586.8896484375px] h-[250px] md:h-[390.54840087890625px]'
            />
            <div className='flex flex-col items-center gap-4'>
              <div className='w-[200px] md:w-[378px] text-sm flex gap-3 text-white h-fit p-4 bg-[#FF7F00]'>
                <img src={camera} alt='' className='w-4 h-4 mt-1' />
                Video Streaming
              </div>
              <div className='w-[200px] md:w-[378px] flex gap-3 text-sm text-white h-fit p-4 bg-[#FF7F00]'>
                <img src={Audio} alt='' className='w-4 h-4 mt-1' />
                <a
                  href={sermonsData[openSermon].link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Audio Streaming
                </a>
              </div>
              <div
                className='w-[200px] md:w-[378px] flex gap-3 text-sm text-white h-fit p-4 bg-[#FF7F00] cursor-pointer'
                onClick={handlePrintPage}
              >
                <img src={pdf} alt='' className='w-4 h-4 mt-1' />
                PDF Reader
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5 py-5 md:px-21 mb-12'>
            <p className='text-[#0D0D0D99] font-normal text-sm md:text-xl'>
              {sermonsData[openSermon].content}
            </p>
          </div>
        </div>
      )}

      <Footer className={isPrintView ? "no-print" : ""} />
    </section>
  );
};

export default SermonPage;

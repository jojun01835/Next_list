"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((res, i) => {
        return (
          <div className="list-item" key={i}>
            <div>
              <Link href={"/detail/" + props.result[i]._id}>
                <h4>{res.title}</h4>
              </Link>
              <p>{res.content}</p>
              <Link href={"/edit/" + props.result[i]._id}>수정</Link>

              <span
                onClick={(e) => {
                  fetch("/api/post/remove", {
                    method: "DELETE",
                    body: props.result[i]._id,
                  })
                    .then((r) => {
                      if (r.status == 200) {
                        return r.json();
                      } else {
                        console.log("서버가 이상함");
                      }
                    })
                    .then((r) => {
                      alert(r);
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                삭제
              </span>
              <p>1월1일</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
